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

export const FIND_POST_BY_ID = gql`
	query findPostById($id: String!) {
		findPostById(id: $id) {
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

export const IS_LIKED_BY_USER = gql`
	query isLikedByUser($id: String!, $userId: String!) {
		isLikedByUser(id: $id, userId: $userId)
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
	mutation unLikePost($id: String!, $userId: String!) {
		unLikePost(id: $id, userId: $userId) {
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

// export const POSTS = gql`
// 	query allPosts {
// 		allPosts {
// 			id
// 			user {
// 				firstName
// 				lastName
// 			}
// 			date
// 			content
// 			likes
// 		}
// 	}

// 	query isLikedByUser($id: ID!, $userId: ID!) {
// 		isLikedByUser(id: $id, userId: $userId)
// 	}

// 	mutation likePost($id: ID!, $userId: ID!) {
// 		likePost(id: $id, userId: $userId) {
// 			likes
// 		}
// 	}

// 	mutation unLikePost($id: ID!, $userId: ID!) {
// 		unLikePost(id: $id, userId: $userId) {
// 			likes
// 		}
// 	}

// 	mutation deletePost($id: ID!) {
// 		deletePost(id: $id) {
// 			id
// 		}
// 	}

// `;
