import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_USERS, FIND_USER_FRIENDS_BY_ID, FIND_USER_FRIEND_REQUESTS_BY_ID } from "../../queries/user.query";
import User, { IUser } from "./User/User";
import { v4 as uuid } from "uuid";

const Users = (): JSX.Element => {
	const [loggedUserId, setLoggedUserId] = useState<string>("");

	useEffect(() => {
		setLoggedUserId(localStorage.getItem("id"));
	}, []);

	const result = useQuery(ALL_USERS);
	
	const userFriends = useQuery(FIND_USER_FRIENDS_BY_ID, {
		variables: loggedUserId,
	});
	
	const userFriendsRequests = useQuery(FIND_USER_FRIEND_REQUESTS_BY_ID, {
		variables: loggedUserId,
	});
	if (result.loading) return <div>Loading...</div>;
	
	return (
		<div>
			<h3>List Users</h3>
			{result?.data?.allUsers.map((user: IUser) => (
				<User
					key={uuid()}
					loggedUserId={loggedUserId}
					id={user.id}
					firstName={user.firstName}
					lastName={user.lastName}
					email={user.email}
					gender={user.gender}
					userFriends={userFriends.data}
					userFriendsRequests={userFriendsRequests.data}
				></User>
			))}
		</div>
	);
};

export default Users;
