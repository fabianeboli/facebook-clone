import React, { FC, useState } from "react";
import Comment, { IComment } from "../../Comment/Comment";
import { useMutation, useQuery } from "@apollo/client";
import {
	LIKE_POST,
	ALL_POSTS,
	UNLIKE_POST,
	IS_LIKED_BY_USER,
	FIND_POST_BY_ID,
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
	// !TODO BUTTON SHOULD BE DISABLED WHILE LIKING OR UNLIKING
	// !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT
	const [loading, setLoading] = useState<boolean>(false);

	const [like] = useMutation(LIKE_POST, {
		refetchQueries: [
			{ query: FIND_POST_BY_ID, variables: { id: props.id } },
			{
				query: IS_LIKED_BY_USER,
				variables: { id: props.id, userId: localStorage.getItem("id") },
			},
		],
	});
	const [unLike] = useMutation(UNLIKE_POST, {
		refetchQueries: [
			{ query: FIND_POST_BY_ID, variables: { id: props.id } },
			{
				query: IS_LIKED_BY_USER,
				variables: { id: props.id, userId: localStorage.getItem("id") },
			},
		],
	});

	const { data } = useQuery(IS_LIKED_BY_USER, {
		variables: { id: props.id, userId: localStorage.getItem("id") },
		onError: (error) => {
			console.log("Error: ", error.message);
		},
	});

	const likeFunction = () => {
		setLoading(true);
		data?.isLikedByUser
			? unLike({
					variables: { id: props.id, userId: localStorage.getItem("id") },
			  })
			: like({
					variables: { id: props.id, userId: localStorage.getItem("id") },
			  });
		setLoading(false);
	};

	const LikeUnLikeButton = (): JSX.Element => {
		console.log(data?.isLikedByUser);
		const likeButton = (
			<button disabled={loading} onClick={() => likeFunction()}>
				{" "}
				Like{" "}
			</button>
		);

		const unLikeButton = (
			<button disabled={loading} onClick={() => likeFunction()}>
				{" "}
				Unlike{" "}
			</button>
		);
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
			<div>{props.likes}</div> {LikeUnLikeButton()}
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
