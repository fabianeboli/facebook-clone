import React, { useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import {
	ADD_POST,
	FEED,
	POST_ADDED,
} from "../../queries/post.query";
import * as S from "./NewPost.style";
import { client } from "../../pages/_app";

const NewPost = (): JSX.Element => {
	const [content, setContent] = useState<string>("");

	const updateCacheWith = (addedPost: any) => {
		const includedIn = (set: any[], object: { id: any }) =>
			set.map((p: { id: any }) => p.id).includes(object.id);

		const dataInStore = client.readQuery({
			query: FEED,
			variables: { limit: 20, offset: 0 },
		});
		if (!includedIn(dataInStore.feed, addedPost)) {
			client.writeQuery({
				query: FEED,
				variables: { limit: dataInStore.feed.length, offset: 0 },
				data: { feed: dataInStore.feed.concat(addedPost) },
			});
		}
	};

	useSubscription(POST_ADDED, {
		onSubscriptionData: ({ subscriptionData }) => {
			const addedPost = subscriptionData.data.addedPost;
			updateCacheWith(addedPost);
		},
	});

	const [addPost] = useMutation(ADD_POST, {
		onError: (error) => {
			window.alert(error.message);
		},
		update: (store, response) => {
			updateCacheWith(response.data.addPost);
		},
	});

	const submit = async (event: { preventDefault: () => void }) => {
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
					required
				/>

				<S.button type="submit" onClick={submit}>
					Submit
				</S.button>
			</S.form>
		</S.container>
	);
};

export default NewPost;
