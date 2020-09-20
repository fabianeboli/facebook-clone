import React from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuid } from "uuid";
import Post, { IPost } from "./Post/Post";
import { ALL_POSTS } from "../../queries/post.query";

const Posts = (): JSX.Element => {
	const result = useQuery(ALL_POSTS, {
		variables: {
			offset: 0,
			limit: 15,
		},
		fetchPolicy: "cache-and-network",
	});

	if (result.loading) return <div>Loading...</div>;

	return (
		<div>
			{result.data.allPosts.map((post: IPost) => (
				<Post
					key={uuid()}
					id={post.id}
					user={post?.user}
					date={post.date}
					likes={post.likes}
					content={post.content}
					comments={post.comments}
				/>
			))}
		</div>
	);
};

export default Posts;
