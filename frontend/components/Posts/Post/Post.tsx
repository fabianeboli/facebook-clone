import Comment, { IComment } from "../../Comment/Comment";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
	LIKE_POST,
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
	const [like, { loading: likeLoading }] = useMutation(LIKE_POST, {
		refetchQueries: [
			{ query: FIND_POST_BY_ID, variables: { id: props.id } },
			{
				query: IS_LIKED_BY_USER,
				variables: { id: props.id, userId: localStorage.getItem("id") },
			},
		],
	});
	const [unlike, { loading: unlikeLoading }] = useMutation(UNLIKE_POST, {
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

	const likeFunction = async () => {
		data?.isLikedByUser
			? await unlike({
					variables: { id: props.id, userId: localStorage.getItem("id") },
			  })
			: await like({
					variables: { id: props.id, userId: localStorage.getItem("id") },
			  });
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
			<div>{props.likes}</div>
			<button
				disabled={data?.isLikedByUser ? unlikeLoading : likeLoading}
				onClick={() => likeFunction()}
			>
				{" "}
				{data?.isLikedByUser ? <div> Like</div> : <div> Unlike </div>}
			</button>
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
