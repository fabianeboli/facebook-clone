import { useRouter } from "next/router";
import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Friends from "../../components/Friends/Friends";
import UserProfile from "../../components/UserProfile/UserProfile";

const userProfile = (): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div style={{ display: "flex" }}>
			<main style={{ flex: "1", overflow: "auto" }}>
				<UserProfile id={String(id)} />
			</main>
			<Dropdown title="My Friends">
				<Friends />
			</Dropdown>
		</div>
	);
};

export default userProfile;
