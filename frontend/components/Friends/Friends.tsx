import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Friend, { IFriend } from "./Friend/Friend";
import { v4 as uuid } from "uuid";
import {
	FIND_USER_FRIENDS_BY_ID,
	REMOVE_FROM_FRIENDS,
} from "../../queries/user.query";

const Friends = (): JSX.Element => {
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const { loading, data } = useQuery(FIND_USER_FRIENDS_BY_ID, {
		variables: { id },
		pollInterval: 10000,
	});

	const [removeFriend] = useMutation(REMOVE_FROM_FRIENDS);

	if (loading) return <div>Loading ... </div>;

	const handleRemove = (id: string, friendId: string) => {
		removeFriend({ variables: { id, friendId } });
	};

	return (
		<div>
			<h2>My friends</h2>
			{console.log(id)}
			{data.findUserFriendsById[0].friends.map((friend: IFriend) => (
				<>
					<Friend
						key={uuid()}
						
						firstName={friend.firstName}
						lastName={friend.lastName}
						avatar={friend.avatar}
					/>
					<button>Message</button>
					<button onClick={() => handleRemove(id, friend.id)}>
						Remove from friendlist
					</button>
				</>
			))}
		</div>
	);
};

export default Friends;
