import { gql } from "apollo-server-express";

const postSchema = gql`
	type Post {
		id: ID!
		user: User
		date: String!
		content: String!
		likes: Int
		comments: [Comment]
	}
	type Query {
		allPosts: [Post]
		feed(offset: Int!,limit: Int!): [Post]
		findPostById(id: String!): Post
		isLikedByUser(id: String!, userId: String!): Boolean!
	}
	type Mutation {
		addPost(content: String!): Post
		likePost(id: String!, userId: String!): Post
		unlikePost(id: String!, userId: String!): Post
		deletePost(id: String!): Post
	}
	type Subscription {
		postAdded: Post!
	}
`;

export default postSchema;
