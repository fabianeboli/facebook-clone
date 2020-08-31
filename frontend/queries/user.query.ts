import { gql } from "@apollo/client";

export const ALL_USERS = gql`
	 query allUsers {
		 allUsers {
			 firstName,
			 lastName
			 email 
		 }
	 }
`;

export const SIGNUP = gql`
	mutation createUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$gender: String!
		$dateOfBirth: String!
		$password: String!
	) {
		createUser(
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
			firstName
			lastName
		}
	}
`;
