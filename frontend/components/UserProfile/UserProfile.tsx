import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND_USER_BY_ID, UPLOAD_AVATAR } from "../../queries/user.query";
import { IFriend } from "../Friends/Friend/Friend";
import { v4 as uuid } from "uuid";

const UserProfile = () => {
	// !TODO set different profiles id
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const { data, loading } = useQuery(FIND_USER_BY_ID, {
		variables: { id },
		onError: (error) => console.log(error),
	});

	const [uploadFile] = useMutation(UPLOAD_AVATAR, {
		onCompleted: (message) => console.log("SENT ", message),
	});
	const handleSubmitFile = async (event: any) => {
		event.preventDefault();

		const file = event.target.files[0];

		await uploadFile({ variables: { id, file } });
		console.log("FILE: ", file);
	};

	if (loading) return <div>Loading ...</div>;

	const user = data.findUserById;
	console.log(user.avatar);

	return (
		<div>
			<h1>User Profile</h1>
			Avatar: <img src={user.avatar} />
			<h4>
				Name: {user.firstName} {user.lastName}
			</h4>
			<h4>Email: {user.email}</h4>
			<h4>Gender: {user.gender}</h4>
			<h4>Date of Birth: {user.dateOfBirth}</h4>
			<input
				type="file"
				required
				onChange={(event) => handleSubmitFile(event)}
			/>
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
