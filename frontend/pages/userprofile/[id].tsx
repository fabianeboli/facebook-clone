import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import UserProfile from "../../components/UserProfile/UserProfile";

const userProfile = (): JSX.Element => {
	const [userId, setUserId] = useState<string>("");

	useEffect(() => {
		setUserId(localStorage.getItem("id"));
	}, []);

	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<UserProfile id={String(id)} />
			{id === userId && <FriendRequests />}
		</>
	);
};

export default userProfile;
