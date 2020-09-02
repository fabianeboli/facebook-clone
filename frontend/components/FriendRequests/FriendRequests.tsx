import React, { useState, useEffect } from "react";
import Friend, { IFriend } from "../Friends/Friend/Friend";
import { useQuery } from "@apollo/client";
import { FIND_USER_FRIEND_REQUESTS_BY_ID } from "../../queries/user.query";
import { v4 as uuid } from "uuid";

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

	if (loading) return <div>Loading... </div>;

	return (
		<div>
			<h2>My friends Requests</h2>
			{data.findUserFriendsRequestsById.map((friend: IFriend) => (
				<>
					<Friend
						key={uuid()}
						firstName={friend.firstName}
						lastName={friend.lastName}
						avatar={friend.avatar}
					/>
				</>
			))}
		</div>
	);
};

export default FriendRequests;
