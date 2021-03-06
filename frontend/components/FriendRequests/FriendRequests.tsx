import React, { useState, useEffect } from "react";
import { IFriend } from "../Friends/Friend/Friend";
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
import * as S from "./FriendRequest.style";
import Popup from "../Popup/Popup";

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

	const Requests = (
		<S.container>
			{data.findUserFriendsRequestsById[0].friendRequests.map(
				(friend: IFriend) => (
					<div key={uuid()}>
						<Popup>
							{friend.firstName} {friend.lastName}
							<S.button onClick={() => handleAcceptRequest(friend.id)}>
								<Popup>Accept Request</Popup>
								<S.acceptFriendRequest size={18} />
							</S.button>
							<S.button onClick={() => handleDeclineRequest(friend.id)}>
								<Popup>Decline Request</Popup>
								<S.rejectFriendRequest size={18} />
							</S.button>
						</Popup>
						<S.requestAvatar src={friend.avatar || "/images/user-solid.svg"} />{" "}
					</div>
				)
			)}
		</S.container>
	);

	return (
		<>
			<h2>My friends Requests</h2>
			{Requests}
		</>
	);
};

export default FriendRequests;
