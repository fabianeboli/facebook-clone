import { gql } from "apollo-server-express";

const userSchema = gql`
	type Token {
		value: String!
		id: String!
		firstName: String!
		lastName: String!
	}
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		gender: String!
		dateOfBirth: String!
		hashedPassword: String!
		avatar: String
		friends: [User]!
		friendRequests: [User]!
	}
	type Query {
		allUsers: [User]!
		findUser(firstName: String, lastName: String): [User!]
		findUserById(id: String!): User!
		findUserFriendsById(id: String!): [User]!
		findUserFriendsRequestsById(id: String!): [User]!
	}
	type Mutation {
		addUser(
			firstName: String!
			lastName: String!
			email: String!
			avatar: String
			gender: String!
			password: String!
			dateOfBirth: String!
		): User!
		editUser(
			firstName: String
			lastName: String
			email: String!
			avatar: String
			gender: String
			password: String
			dateOfBirth: String
		): User!
		deleteUser(id: String!): User
		login(email: String!, password: String!): Token!
	}
`;

export default userSchema;
