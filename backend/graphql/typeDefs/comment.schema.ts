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
		findComment(id: String!): [Comment]!
	}
	type Mutation {
		addComment(user: String!, post: String!, content: String!): Comment!
		editComment(id: String!, content: String!): Comment!
		likeComment(id: String!): Comment!
		removeComment(id: String!): Comment!
	}
`;

export default commentSchema;
