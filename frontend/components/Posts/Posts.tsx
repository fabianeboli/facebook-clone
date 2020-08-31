import React from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuid } from "uuid";
import Post, { IPost } from "./Post/Post";
import { ALL_POSTS } from "../../queries/post.query";

const Posts = (): JSX.Element => {
	const result = useQuery(ALL_POSTS);

	if (result.loading) return <div>Loading...</div>;

	return (
		<div>
			<h3>Posts</h3>
			{result.data.allPosts.map((post: IPost) => (
				<Post
					key={uuid()}
					id={post.id}
					firstName={post?.user?.firstName}
					lastName={post?.user?.lastName}
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
