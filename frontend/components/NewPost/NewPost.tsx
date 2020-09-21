import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST, ALL_POSTS } from "../../queries/post.query";
import * as S from "./NewPost.style";

const NewPost = (): JSX.Element => {
	const [content, setContent] = useState<string>("");
	const [addPost] = useMutation(ADD_POST, {
		refetchQueries: [{ query: ALL_POSTS }],
	});

	const submit = async (event) => {
		event.preventDefault();
		await addPost({ variables: { content } });
		setContent("");
	};

	return (
		<S.container>
			<S.form>
				<S.textarea
					rows={6}
					cols={35}
					value={content}
					onChange={({ target }) => setContent(target.value)}
					placeholder="Write new Post..."
				/>

				<S.button type="submit" onClick={submit}>
					Submit
				</S.button>
			</S.form>
		</S.container>
	);
};

export default NewPost;
