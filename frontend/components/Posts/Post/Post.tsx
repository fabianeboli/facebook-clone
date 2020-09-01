import React, { FC } from "react";
import Comment, { IComment } from "../../Comment/Comment";
import { useMutation, useQuery } from "@apollo/client";
import {
	LIKE_POST,
	ALL_POSTS,
	UNLIKE_POST,
	IS_LIKED_BY_USER,
} from "../../../queries/post.query";

export interface IPost {
	id: string;
	user?: {
		firstName: string;
		lastName: string;
	};
	firstName: string;
	lastName: string;
	date: string;
	content: string;
	likes: number;
	comments: IComment[];
}

const Post = (props: IPost): JSX.Element => {
	// !TODO MUTATIONS SHOULDN'T REFETCH ALL POSTS BUT JUST ONE
	// !TODO BUTTON SHOULD BE DISABLED LIKING OR UNLIKING 
	// !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT 
	const [like] = useMutation(LIKE_POST, {
		refetchQueries: [{ query: ALL_POSTS }],
	});
	const [unLike] = useMutation(UNLIKE_POST, {
		refetchQueries: [{ query: ALL_POSTS }],
	});

	const { data, loading } = useQuery(IS_LIKED_BY_USER, {
		variables: { id: props.id, userId: localStorage.getItem("id") },
		errorPolicy: "all",
		onError: (error) => {
			console.log("Error: ", error.message);
		},
	});

	
	const LikeUnLikeButton = (): JSX.Element => {
		const likeButton = (
			<button
				onClick={() =>
					like({
						variables: { id: props.id, userId: localStorage.getItem("id") },
					})
				}
			>
				{" "}
				Like{" "}
			</button>
		);

		const unLikeButton = (
			<button
				onClick={() =>
					unLike({
						variables: { id: props.id, userId: localStorage.getItem("id") },
					})
				}
			>
				{" "}
				Unlike{" "}
			</button>
		);
		console.log(data?.isLikedByUser);
		return data?.isLikedByUser ? unLikeButton : likeButton;
	};

	return (
		<div>
			<div>
				<h4>
					{props.user?.firstName} {props.user?.lastName}{" "}
					<span>{props.date}</span>
				</h4>
			</div>
			<div>
				<p>{props.content}</p>
			</div>
			<div>{props.likes}</div> <LikeUnLikeButton />
			<div>
				{props?.comments?.map((comment: IComment) => {
					<Comment
						firstName={comment.firstName}
						lastName={comment.lastName}
						content={comment.content}
						date={comment.date}
						likes={comment.likes}
						comments={comment.comments}
					/>;
				})}
			</div>
		</div>
	);
};

export default Post;
