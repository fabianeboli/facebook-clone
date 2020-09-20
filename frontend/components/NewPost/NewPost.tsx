import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST, ALL_POSTS } from "../../queries/post.query";

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
		<div>
		
			<form>
				<textarea
					rows={7}
					cols={30}
					value={content}
					onChange={({ target }) => setContent(target.value)}
					placeholder="Write new Post..."
				/>
				<button type="submit" onClick={submit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default NewPost;
