import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
	query allPosts {
		allPosts {
			id
			user {
				firstName
				lastName
			}
			date
			content
			likes
		}
	}
`;

export const LIKE_POST = gql`
	mutation likePost($id: ID!) {
		likePost(id: $id) {
			likes
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}
`;
