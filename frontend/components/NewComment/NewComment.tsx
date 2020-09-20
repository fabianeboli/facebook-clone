import React, { useState, FC } from "react";
import { useMutation } from "@apollo/client";
import { FIND_POST_BY_ID } from "../../queries/post.query";
import { ADD_COMMENT } from "../../queries/comment.query";
import * as S from "./NewComment.style";

interface INewComment {
	id: string;
}

const NewComment: FC<INewComment> = (props: INewComment): JSX.Element => {
	const [content, setContent] = useState<string>("");
	const [addComment] = useMutation(ADD_COMMENT, {
		refetchQueries: [
			{
				query: FIND_POST_BY_ID,
				variables: {
					id: props.id,
				},
			},
		],
	});

	const submit = async (event) => {
		event.preventDefault();
		console.log(localStorage.getItem("id"), props.id, content);
		await addComment({
			variables: {
				user: localStorage.getItem("id"),
				post: props.id,
				content: content,
			},
		});
		setContent("");
	};

	return (
		<div>
			<S.form>
				<S.newComment
					rows={7}
					cols={60}
					value={content}
					onChange={({ target }) => setContent(target.value)}
				/>
				<S.newCommentButton type="submit" onClick={submit}>
					Add Comment
				</S.newCommentButton>
			</S.form>
		</div>
	);
};

export default NewComment;
