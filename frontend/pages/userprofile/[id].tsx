import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FriendRequests from "../../components/FriendRequests/FriendRequests";
import UserProfile from "../../components/UserProfile/UserProfile";

const userProfile = (): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<UserProfile id={String(id)} />
		</>
	);
};

export default userProfile;
