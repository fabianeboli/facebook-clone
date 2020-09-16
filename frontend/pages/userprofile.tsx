import React, { useEffect, useState } from "react";
import FriendRequests from "../components/FriendRequests/FriendRequests";
import Friends from "../components/Friends/Friends";
import UserProfile from "../components/UserProfile/UserProfile";

const userProfile = (): JSX.Element => {
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	return (
		<div>
			<UserProfile id={id} />
			<FriendRequests />

			<aside>
				<Friends />
			</aside>
		</div>
	);
};

export default userProfile;
