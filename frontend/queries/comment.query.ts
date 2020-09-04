import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
	mutation addComment($user: String!, $post: String!, $content: String!) {
		addComment(user: $user, post: $post, content: $content) {
			content
		}
	}
`;

export const EDIT_COMMENT = gql`
	mutation editComment($id: String!, $content: String!) {
		editComment(id: $id, content: $content) {
			id
		}
	}
`;

export const LIKE_COMMENT = gql`
	mutation likeComment($id: String!) {
		likeComment(id: $id) {
			id
		}
	}
`;

export const UNLIKE_COMMENT = gql`
	mutation unlikeComment($id: String!) {
		unlikeComment(id: $id) {
			id
		}
	}
`;

export const REMOVE_COMMENT = gql`
	mutation removeComment($id: String!) {
		removeComment(id: $id) {
			id
		}

	}
`;
