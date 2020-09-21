import { gql } from "@apollo/client";

export const IS_COMMENT_LIKED_BY_USER = gql`
	query isCommentLikedByUser($id: String!, $userId: String!) {
		isCommentLikedByUser(id: $id, userId: $userId)
	}
`;

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
	mutation likeComment($id: String!, $userId: String!) {
		likeComment(id: $id, userId: $userId) {
			id
		}
	}
`;

export const UNLIKE_COMMENT = gql`
	mutation unlikeComment($id: String!, $userId: String!) {
		unlikeComment(id: $id, userId: $userId) {
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
