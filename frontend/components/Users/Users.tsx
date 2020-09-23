import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
	ALL_USERS,
	FIND_USER_FRIENDS_BY_ID,
	FIND_USER_FRIEND_REQUESTS_BY_ID,
} from "../../queries/user.query";
import User, { IUser } from "./User/User";
import { v4 as uuid } from "uuid";
import * as S from "./Users.style";

const Users = (): JSX.Element => {
	const [id, setId] = useState<string>("");
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const result = useQuery(ALL_USERS);

	const userFriends = useQuery(FIND_USER_FRIENDS_BY_ID, {
		variables: { id },
	});

	const userFriendsRequests = useQuery(FIND_USER_FRIEND_REQUESTS_BY_ID, {
		variables: { id },
	});
	if (result.loading) return <div>Loading...</div>;

	return (
		<>
			<S.header>Users</S.header>
			<S.searchInput
				type="text"
				value={search}
				onChange={({ target }) => setSearch(target.value)}
				placeholder="Search for an user"
			/>
			<S.container>
				{result?.data?.allUsers
					.filter((user: IUser) => user.id !== id)
					.filter((user: IUser) =>
						`${user.firstName} ${user.lastName}`.includes(search)
					)
					.map((user: IUser) => (
						<User
							key={uuid()}
							loggedUserId={id}
							id={user.id}
							avatar={user.avatar}
							firstName={user.firstName}
							lastName={user.lastName}
							email={user.email}
							gender={user.gender}
							userFriends={userFriends.data?.findUserFriendsById[0].friends}
							userFriendsRequests={
								userFriendsRequests.data?.findUserFriendsRequestsById[0]
									.friendRequests
							}
						></User>
					))}
			</S.container>
		</>
	);
};

export default Users;
