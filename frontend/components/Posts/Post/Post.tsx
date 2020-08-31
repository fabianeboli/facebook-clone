import React, { FC } from "react";
import Comment, { IComment } from "../../Comment/Comment";

export interface IPost {
	firstName: string;
	lastName: string;
	date: string;
	content: string;
	likes: number;
	comments: IComment[];
}

const Post = (props: IPost): JSX.Element => {
	return (
		<div>
			<div>
				<h4>
					{props.firstName} {props.lastName} <span>{props.date}</span>
				</h4>
			</div>
			<div>
				<p>{props.content}</p>
			</div>
			<div>{props.likes}</div>
			<div>
				{props.comments.map((comment: IComment) => {
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
