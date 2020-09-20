import React from "react";
import * as S from "./Comment.style";
import * as Sp from "../Posts/Post/Post.style";
export interface IComment {
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
	return (
		<S.container>
			<div>
				<S.userDetails>
					<S.username>
						{props.firstName} {props.lastName}{" "}
					</S.username>
					<S.date>{props.date}</S.date>
				</S.userDetails>
			</div>
			<S.content>{props.content}</S.content>
			<Sp.like size={16} />
			{props.likes ?? 0}
			<div>
				{props?.comments?.map((comment) => {
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
		</S.container>
	);
};

export default Comment;
