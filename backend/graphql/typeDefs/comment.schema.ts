import { gql } from "apollo-server-express";

const commentSchema = gql`
	type Comment {
		id: ID!
		user: User!
		post: String!
		content: String!
		date: String!
		likes: Int!
		comments: [Comment]!
	}
	type Query {
		allComments: [Comment]!
		findComment(id: ID!): [Comment]!
	}
	type Mutation {
		addComment(user: String!, post: String!, content: String!): Comment!
		editComment(id: ID!, content: String!): Comment!
		likeComment(id: ID!): Comment!
		removeComment(id: ID!): Comment!
	}
`;

export default commentSchema;
