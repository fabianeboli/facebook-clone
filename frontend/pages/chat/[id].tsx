import { useRouter } from "next/router";
import React from "react";
import Chat from "../../components/Chat/Chat";
import Dropdown from "../../components/Dropdown/Dropdown";
import Friends from "../../components/Friends/Friends";

const chat = (): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div style={{ display: "flex" }}>
			<main style={{ flex: "1", overflow: "auto" }}>
				<Chat friendsId={String(id)} />
			</main>
			<Dropdown title="My Friends">
				<Friends />
			</Dropdown>
		</div>
	);
};

export default chat;
