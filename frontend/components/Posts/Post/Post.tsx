import React, { FC } from "react";
import Comment, { IComment } from "../../Comment/Comment";
import { useMutation } from "@apollo/client";
import { LIKE_POST, ALL_POSTS } from "../../../queries/post.query";

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
	const [like] = useMutation(LIKE_POST, {
		refetchQueries: [{ query: ALL_POSTS }],
	});

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
			<div>{props.likes}</div>{" "}
			<button onClick={() => like({ variables: { id: props.id } })}>
				{" "}
				Like{" "}
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
