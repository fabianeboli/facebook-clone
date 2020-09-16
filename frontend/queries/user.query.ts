import { gql } from "@apollo/client";

export const ALL_USERS = gql`
	query allUsers {
		allUsers {
			id
			firstName
			lastName
			email
		}
	}
`;

export const FIND_USER_BY_ID = gql`
	query findUserById($id: String!) {
		findUserById(id: $id) {
			id
			firstName
			lastName
			email
			gender
			dateOfBirth
			friends {
				firstName
				lastName
			}
			posts {
				content
			}
		}
	}
`;

export const FIND_USER_FRIENDS_BY_ID = gql`
	query findUserFriendsById($id: String!) {
		findUserFriendsById(id: $id) {
			friends {
				id
				firstName
				lastName
				avatar
			}
		}
	}
`;

export const FIND_USER_FRIEND_REQUESTS_BY_ID = gql`
	query findUserFriendsRequestsById($id: String!) {
		findUserFriendsRequestsById(id: $id) {
			friendRequests {
				id
				firstName
				lastName
				avatar
			}
		}
	}
`;

export const REMOVE_FROM_FRIENDS = gql`
	mutation removeFromFriends($id: String!, $friendId: String!) {
		removeFromFriends(id: $id, friendId: $friendId) {
			id
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$gender: String!
		$dateOfBirth: String!
		$password: String!
	) {
		addUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			gender: $gender
			dateOfBirth: $dateOfBirth
			password: $password
		) {
			firstName
			lastName
			email
		}
	}
`;

export const UPLOAD_AVATAR = gql`
	mutation uploadAvatar($id: String!, $file: Upload!) {
		uploadAvatar(id: $id, file: $file) {
			filename
			mimetype
			encoding
		}
	}
`;

export const SIGN_IN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			value
			id
			firstName
			lastName
		}
	}
`;
