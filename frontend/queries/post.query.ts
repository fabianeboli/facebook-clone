import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
	query allPosts {
		allPosts {
			id
			user {
				id
				firstName
				lastName
				avatar
			}
			date
			content
			likes
			comments {
				id
				post
				user {
					firstName
					lastName
				}
				date
				content
				likes
			}
		}
	}
`;

export const FIND_POST_BY_ID = gql`
	query findPostById($id: String!) {
		findPostById(id: $id) {
			id
			user {
				id
				firstName
				lastName
				avatar
			}
			date
			content
			likes
			comments {
				id
				post
				user {
					firstName
					lastName
				}
				date
				content
				likes
			}
		}
	}
`;

export const IS_LIKED_BY_USER = gql`
	query isLikedByUser($id: String!, $userId: String!) {
		isLikedByUser(id: $id, userId: $userId)
	}
`;

export const ADD_POST = gql`
	mutation addPost($content: String!) {
		addPost(content: $content) {
			id
		}
	}
`;

export const LIKE_POST = gql`
	mutation likePost($id: String!, $userId: String!) {
		likePost(id: $id, userId: $userId) {
			likes
		}
	}
`;

export const UNLIKE_POST = gql`
	mutation unlikePost($id: String!, $userId: String!) {
		unlikePost(id: $id, userId: $userId) {
			likes
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($id: String!) {
		deletePost(id: $id) {
			id
		}
	}
`;
