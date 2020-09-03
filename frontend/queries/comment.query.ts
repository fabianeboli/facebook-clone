import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
	mutation addComment($user: String!, $post: String!, $content: String!) {
		addComment(user: $user, post: $post, string: $string) {
			id
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
	mutation likeComment(id: $id) {
		likeComment(id: $Id) {
			id
		}
	}
`;

export const UNLIKE_COMMENT = gql`
	mutation unlikeComment(id: $id) {
		unlikeComment(id: $Id) {
			id
		}
	}
`;

export const REMOVE_COMMENT = gql`
	mutation removeComment(id: String!) {
		id

	}
`;
