import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Friend, { IFriend } from "./Friend/Friend";
import { v4 as uuid } from "uuid";
import { FIND_USER_FRIENDS_BY_ID } from "../../queries/user.query";

const Friends = (): JSX.Element => {
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const { loading, data } = useQuery(FIND_USER_FRIENDS_BY_ID, {
		variables: { id },
		pollInterval: 10000
	});
	if (loading) return <div>Loading ... </div>;

	return (
		<div>
			<h2>My friends</h2>
			{data.findUserFriendsById.map((friend: IFriend) => (
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

export default Friends;
