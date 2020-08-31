import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation login($email: String!, password: String!) {
		login(email: $email, password: $password) {
			value
			firstName
			lastName
		}
	}
`;

export const POSTS = gql`
	query allPosts {
		allPosts {
			firstName
			lastName
			content
			date
			likes
			comments
		}
	}
`;
