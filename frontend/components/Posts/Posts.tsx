import React from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuid } from "uuid";
import Post, { IPost } from "./Post/Post";
import { FEED } from "../../queries/post.query";
import Spinner from "../Spinner/Spinner";
import * as S from "./Posts.style";

const Posts = (): JSX.Element => {
	const { loading, data, fetchMore } = useQuery(FEED, {
		variables: {
			offset: 0,
			limit: 20,
		},
		fetchPolicy: "cache-and-network",
	});

	if (loading) return <Spinner />;

	return (
		<>
			{data.feed.map((post: IPost) => (
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
			<S.buttonContainer>
				<S.fetchMore
					onClick={() =>
						fetchMore({
							variables: {
								offset: data.feed.length,
								limit: 20,
							},
							updateQuery: (prev, { fetchMoreResult }) => {
								if (!fetchMoreResult) return prev;
								return Object.assign({}, prev, {
									feed: [...prev.feed, ...fetchMoreResult.feed],
								});
							},
						})
					}
				>
					More posts
				</S.fetchMore>
			</S.buttonContainer>
		</>
	);
};

export default Posts;
