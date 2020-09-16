import React from "react";
import Friends from "../components/Friends/Friends";
import NewPost from "../components/NewPost/NewPost";
import Posts from "../components/Posts/Posts";

const main = (): JSX.Element => {
	return (
		<div>
			<NewPost />
			<Posts />
			<Friends />
		</div>
	);
};

export default main;
