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
		isCommentLikedByUser(id: String!, userId: String!): Boolean
	}
	type Mutation {
		addComment(user: String!, post: String!, content: String!): Comment!
		editComment(id: String!, content: String!): Comment!
		likeComment(id: String!, userId: String!): Comment!
		unlikeComment(id: String!, userId: String!): Comment!
		removeComment(post: String!, id: String!): Comment
	}
`;

export default commentSchema;
