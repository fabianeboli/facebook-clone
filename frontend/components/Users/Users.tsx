import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_USERS } from "../../queries/user.query";
import { IUser } from "./User/User";
import { v4 as uuid } from "uuid";

const Users = (): JSX.Element => {
	const result = useQuery(ALL_USERS);
	console.log(result);
	if (result.loading) return <div>Loading...</div>;

	return (
		<div>
			{result.data.allUsers.map((user: IUser) => (
				<li key={uuid()}>
					{user.firstName}
					{user.lastName}
					{user.email}
					{user.gender}
				</li>
			))}
		</div>
	);
};

export default Users;
