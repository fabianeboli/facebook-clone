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
import * as S from "./Post.style";

export interface IPost {
	id: string;
	user?: {
		id: string;
		firstName: string;
		lastName: string;
		avatar?: string;
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
		<S.deleteButton onClick={deletePost}>
			<S.deletePost size={24} />
		</S.deleteButton>
	);

	return (
		<S.container>
			<S.userContainer>
				<S.avatar src={props.user?.avatar ?? "/images/user-solid.svg"} />
				<S.userDetails>
					<S.username>
						{props?.user?.firstName} {props?.user?.lastName}{" "}
					</S.username>
					<S.date>
						<span>{props.date}</span>
					</S.date>
				</S.userDetails>

				<S.statusContainer>
					{props?.user?.id === localStorage.getItem("id") && deleteButton}
					<div>
						<S.like size={24} /> {props.likes}
					</div>
					<div>
						<S.comments size={24} /> {props.comments.length}
					</div>
				</S.statusContainer>
			</S.userContainer>

			<S.content>{props.content}</S.content>

			<S.optionsContainer>
				<S.optionButton
					disabled={data?.isLikedByUser ? unlikeLoading : likeLoading}
					onClick={() => likeFunction()}
				>
					{" "}
					<S.optionLike size={24} />
					{data?.isLikedByUser ? <div> Unlike </div> : <div> Like</div>}
				</S.optionButton>

				<S.optionButton onClick={() => setToggleComment(!toggleComment)}>
					<S.commentLike size={24} />
					{toggleComment ? (
						<div>Close comment</div>
					) : (
						<div>Add new Comment</div>
					)}
				</S.optionButton>
			</S.optionsContainer>
			{console.log(props.comments)}
			<div>
				{toggleComment && <div>{<NewComment id={props.id} />}</div>}
				{props.comments.map((comment) => (
					<Comment
						key={uuid()}
						firstName={comment.user.firstName}
						lastName={comment.user.lastName}
						content={comment.content}
						date={comment.date}
						likes={comment.likes}
						comments={comment?.comments}
					/>
				))}
			</div>
		</S.container>
	);
};

export default Post;
