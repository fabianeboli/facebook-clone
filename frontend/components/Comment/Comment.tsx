import React from "react";

export interface IComment {
	firstName: string;
	lastName: string;
	date: string;
	content: string;
	likes: number;
	comments: IComment[];
}

const Comment = (props: IComment): JSX.Element => {
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
				{props.comments.map((comment) => {
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

export default Comment;
