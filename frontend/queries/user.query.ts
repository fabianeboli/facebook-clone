import { gql } from "@apollo/client";

export const ALL_USERS = gql`
	query allUsers {
		allUsers {
			firstName
			lastName
			email
		}
	}
`;

export const FIND_USER_FRIENDS_BY_ID = gql`
	query findUserFriendsById($id: String!) {
		findUserFriendsById(id: $id) {
			friends {
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
				firstName
				lastName
				avatar
			}
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
