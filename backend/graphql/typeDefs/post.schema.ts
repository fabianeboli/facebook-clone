import { gql } from "apollo-server-express";

const postSchema = gql`
	type Post {
		id: ID!
		user: User
		date: String!
		content: String!
		likes: Int
	}
	type Query {
		allPosts: [Post]
	}
	type Mutation {
		addPost(
			date: String!
			content: String!
		): Post
		likePost(id: ID!): Post
		deletePost(id: String!): Post
	}
`;

export default postSchema;
