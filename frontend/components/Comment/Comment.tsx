import React, { useEffect, useState } from "react";
import * as S from "./Comment.style";
import * as Sp from "../Posts/Post/Post.style";
import { useMutation, useQuery } from "@apollo/client";
import {
	IS_COMMENT_LIKED_BY_USER,
	LIKE_COMMENT,
} from "../../queries/comment.query";
import { FIND_POST_BY_ID } from "../../queries/post.query";
export interface IComment {
	id: string;
	postId: string;
	user?: {
		firstName: string;
		lastName: string;
	};
	firstName: string;
	lastName: string;
	date: string;
	content: string;
	likes: number;
	comments?: IComment[];
}

const Comment = (props: IComment): JSX.Element => {
	const [id, setId] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const [like, { loading: likeLoading }] = useMutation(LIKE_COMMENT, {
		refetchQueries: [
			{ query: FIND_POST_BY_ID, variables: { id: props.postId } },
			{
				query: IS_COMMENT_LIKED_BY_USER,
				variables: { id: props.id, userId: localStorage.getItem("id") },
			},
		],
	});

	const [unlike, { loading: unlikeLoading }] = useMutation(LIKE_COMMENT, {
		refetchQueries: [
			{ query: FIND_POST_BY_ID, variables: { id: props.postId } },
			{
				query: IS_COMMENT_LIKED_BY_USER,
				variables: { id: props.id, userId: localStorage.getItem("id") },
			},
		],
	});

	const { data } = useQuery(IS_COMMENT_LIKED_BY_USER, {
		variables: { id: props.id, userId: id },
		onError: (error) => {
			console.log("Error: ", error.message);
		},
	});

	const likeFunction = async () => {
		data?.isCommentLikedByUser
			? await unlike({
					variables: { id: props.id, userId: localStorage.getItem("id") },
			  })
			: await like({
					variables: { id: props.id, userId: localStorage.getItem("id") },
			  });
	};
	return (
		<S.container>
			<S.commentsInfoContainer>
				<Sp.userDetails>
					<Sp.username>
						{props.firstName} {props.lastName}{" "}
					</Sp.username>
					<Sp.date>{props.date}</Sp.date>
				</Sp.userDetails>

				<S.statusContainer>
					<div>
						<Sp.like size={16} /> {props.likes}
					</div>
				</S.statusContainer>
			</S.commentsInfoContainer>

			<Sp.content>{props.content}</Sp.content>
			<Sp.optionsContainer>
				<Sp.optionButton
					disabled={data?.isLikedByUser ? unlikeLoading : likeLoading}
					onClick={() => likeFunction()}
				>
					{" "}
					<Sp.optionLike size={24} />
					{data?.isCommentLikedByUser ? <div> Unlike </div> : <div> Like</div>}
				</Sp.optionButton>
			</Sp.optionsContainer>
			<div>
				{props.comments?.map((comment) => {
					<Comment
						id={comment.id}
						postId={comment.postId}
						firstName={comment.user.firstName}
						lastName={comment.user.lastName}
						content={comment.content}
						date={comment.date}
						likes={comment.likes}
						comments={comment.comments}
					/>;
				})}
			</div>
		</S.container>
	);
};

export default Comment;
