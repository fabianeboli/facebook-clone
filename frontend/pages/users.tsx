import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import Friends from "../components/Friends/Friends";
import Users from "../components/Users/Users";

const users = (): JSX.Element => {
	return (
		<div style={{ display: "flex" }}>
			<main style={{ flex: "1", overflow: "auto" }}>
				<Users />
			</main>
			<Dropdown title="My Friends">
				<Friends />
			</Dropdown>
		</div>
	);
};

export default users;
