import React, { useState, useEffect } from "react";
import Friend, { IFriend } from "../Friends/Friend/Friend";
import { useQuery, useMutation } from "@apollo/client";
import {
	FIND_USER_FRIEND_REQUESTS_BY_ID,
	FIND_USER_FRIENDS_BY_ID,
} from "../../queries/user.query";
import { v4 as uuid } from "uuid";
import {
	ACCEPT_FRIEND_REQUEST,
	DECLINE_FRIEND_REQUEST,
} from "../../queries/friendRequest.query";

const FriendRequests = () => {
	const [id, setId] = useState<string>();

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const { data, loading } = useQuery(FIND_USER_FRIEND_REQUESTS_BY_ID, {
		variables: {
			id,
		},
		pollInterval: 13500,
	});

	const [acceptRequest] = useMutation(ACCEPT_FRIEND_REQUEST, {
		refetchQueries: [
			{ query: FIND_USER_FRIEND_REQUESTS_BY_ID, variables: { id } },
			{ query: FIND_USER_FRIENDS_BY_ID, variables: { id } },
		],
	});

	const [declineRequest] = useMutation(DECLINE_FRIEND_REQUEST, {
		refetchQueries: [
			{ query: FIND_USER_FRIEND_REQUESTS_BY_ID, variables: { id } },
		],
	});

	if (loading) return <div>Loading... </div>;

	const handleAcceptRequest = (requestId: string) => {
		acceptRequest({ variables: { senderId: id, receiverId: requestId } });
	};

	const handleDeclineRequest = (requestId: string) => {
		declineRequest({ variables: { senderId: id, receiverId: requestId } });
	};

	return (
		<div>
			<h2>My friends Requests</h2>
			{console.log(data.findUserFriendsRequestsById[0])}
			{data.findUserFriendsRequestsById[0].friendRequests.map(
				(friend: IFriend) => (
					<>
						<Friend
							key={uuid()}
							id={friend.id}
							firstName={friend.firstName}
							lastName={friend.lastName}
							avatar={friend.avatar}
						/>
						<button onClick={() => handleAcceptRequest(friend.id)}>
							Accept Friend Request
						</button>
						<button onClick={() => handleDeclineRequest(friend.id)}>
							Decline Friend Request
						</button>
					</>
				)
			)}
		</div>
	);
};

export default FriendRequests;
