import React from "react";
import { useQuery } from "@apollo/client";
import Friend, { IFriend } from "./Friend/Friend";
import { v4 as uuid } from "uuid";
import { FIND_USER_FRIENDS_BY_ID } from "../../queries/user.query";

const Friends = (): JSX.Element => {
	const result = useQuery(FIND_USER_FRIENDS_BY_ID);
	if (result.loading) return <div>Loading ... </div>;

	const presentFriends = () =>
		result.data
			.findUserFriendsById(localStorage.getItem("id"))
			.map((friend: IFriend) => (
				<>
					<Friend
						key={uuid()}
						firstName={friend.firstName}
						lastName={friend.lastName}
						avatar={friend.avatar}
					/>
				</>
			));

	return <div>{() => presentFriends()}</div>;
};

export default Friends;
