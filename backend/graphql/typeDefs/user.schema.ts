import { gql } from "apollo-server-express";

const userSchema = gql`
	type File {
		filename: String!
		mimetype: String!
		encoding: String!
		url: String!
	}

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

			gender: String!
			password: String!
			dateOfBirth: String!
		): User!
		editUser(
			firstName: String
			lastName: String
			email: String!

			gender: String
			password: String
			dateOfBirth: String
		): User!
		uploadAvatar(id: String!, file: Upload!): File
		deleteUser(id: String!): Boolean
		removeFromFriends(id: String!, friendId: String!): User
		login(email: String!, password: String!): Token!
	}
`;

export default userSchema;
