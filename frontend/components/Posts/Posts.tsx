import React from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuid } from "uuid";
import Post, { IPost } from "./Post/Post";

const Posts = (): JSX.Element => {
	const result = useQuery(AlL_POSTS);
	if (result.loading) return <div>Loading...</div>;

	return (
		<div>
			<h1>Posts</h1>
			{result.data.allPosts.map((post: IPost) => {
				<Post
					key={uuid()}
					firstName={post.firstName}
					lastName={post.lastName}
					date={post.date}
					content={post.content}
					likes={post.likes}
					comments={post.comments}
				/>;
			})}
		</div>
	);
};

export default Posts;
