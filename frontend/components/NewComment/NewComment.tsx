import React, { useState, FC } from "react";
import { useMutation } from "@apollo/client";
import { FIND_POST_BY_ID } from "../../queries/post.query";
import { ADD_COMMENT } from "../../queries/comment.query";

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
			<h3>Add Comment</h3>
			<form>
				<textarea
					rows={7}
					cols={30}
					value={content}
					onChange={({ target }) => setContent(target.value)}
				/>
				<button type="submit" onClick={submit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewComment;
