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
		friendRequests: [FriendRequest]!
	}
	type Query {
		allUsers: [User]!
		findUser(firstName: String, lastName: String): [User!]
		findUserById(id: ID!): User!
		findUserFriendsById(id: ID!): User!
		findUserFriendsRequestsById(id: ID!): User!
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
		deleteUser(id: ID!): User
		login(email: String!, password: String!): Token!
	}
`;

export default userSchema;
