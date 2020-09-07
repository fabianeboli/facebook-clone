import Comment, { IComment } from "../../Comment/Comment";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
	LIKE_POST,
	UNLIKE_POST,
	IS_LIKED_BY_USER,
	FIND_POST_BY_ID,
	DELETE_POST,
	ALL_POSTS,
} from "../../../queries/post.query";
import NewComment from "../../NewComment/NewComment";
import { v4 as uuid } from "uuid";

export interface IPost {
	id: string;
	user?: {
		id: string;
		firstName: string;
		lastName: string;
	};
	date: string;
	content: string;
	likes: number;
	comments: IComment[];
}

const Post = (props: IPost): JSX.Element => {
	const [toggleComment, setToggleComment] = useState<boolean>(false);

	// LIKE OR UNLIKE POST

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

	const [removePost] = useMutation(DELETE_POST, {
		refetchQueries: [{ query: ALL_POSTS }],
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

	// DELETE POST

	const deletePost = async () => {
		await removePost({ variables: { id: props.id } });
	};

	const deleteButton: JSX.Element = (
		<button onClick={deletePost}>DELETE POST</button>
	);

	return (
		<div>
			<div>
				<h4>
					{props?.user?.firstName} {props?.user?.lastName}{" "}
					<span>{props.date}</span>
					<div>
						{props?.user?.id === localStorage.getItem("id") && deleteButton}
					</div>
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
				{data?.isLikedByUser ? <div> Unlike </div> : <div> Like</div>}
			</button>

			<button onClick={() => setToggleComment(!toggleComment)}>
				{toggleComment ? <div>Close comment</div> : <div>Add new Comment</div>}
			</button>
			{toggleComment && <div>{<NewComment id={props.id} />}</div>}
			<div>
				{console.log(props.comments[1]?.content)}
				{props.comments.map((comment) => (
					<Comment
						key={uuid()}
						firstName={comment?.firstName}
						lastName={comment?.lastName}
						content={comment?.content}
						date={comment?.date}
						likes={comment?.likes}
						comments={comment?.comments}
					/>
				))}
			</div>
		</div>
	);
};

export default Post;
