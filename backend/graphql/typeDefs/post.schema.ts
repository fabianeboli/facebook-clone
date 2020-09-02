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
		findPostById(id: String!): Post
		isLikedByUser(id: String!, userId: String!): Boolean!
	}
	type Mutation {
		addPost(
			date: String!
			content: String!
		): Post
		likePost(id: String!, userId: String!): Post
		unLikePost(id: String!, userId: String!): Post
		deletePost(id: String!): Post
	}
`;

export default postSchema;
