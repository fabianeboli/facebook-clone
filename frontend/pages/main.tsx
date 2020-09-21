import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import Friends from "../components/Friends/Friends";
import NewPost from "../components/NewPost/NewPost";
import Posts from "../components/Posts/Posts";

const main = (): JSX.Element => {
	return (
		<div>
			<NewPost />
			<Posts />
			<Dropdown title="My Friends">
				<Friends />
			</Dropdown>
		</div>
	);
};

export default main;
