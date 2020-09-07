import React, { useState, useEffect } from "react";
import { IUser } from "../Users/User/User";
import { useQuery } from "@apollo/client";
import { FIND_USER_BY_ID } from "../../queries/user.query";
import { IFriend } from "../Friends/Friend/Friend";
import { v4 as uuid } from "uuid";

const UserProfile =  () => {
	// !TODO set different profiles id
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(id => localStorage.getItem("id"));
	}, []);

	const { data, loading } = useQuery(FIND_USER_BY_ID, {
		variables: { id },
	});
	if (loading) return <div>Loading ...</div>;

	console.log("DATA: ", data);
	const user: any = data.findUserById;


	return (
		<div>
			<h1>User Profile</h1>
			<h4>
				Name: {user.firstName} {user.lastName}
			</h4>
			<h4>Email: {user.email}</h4>
			<h4>Gender: {user.gender}</h4>
			<h4>Date of Birth: {user.dateOfBirth}</h4>
			<div>
				{user.firstName}s friends
				<div>
					{user.friends.map((friend: IFriend) => (
						<div key={uuid()}>
							<div>{friend.avatar}</div>
							<h6>
								{friend.firstName} {friend.lastName}
							</h6>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
