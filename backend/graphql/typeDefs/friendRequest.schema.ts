import { gql } from "apollo-server-express";

const friendRequestSchema = gql`
	type FriendRequest {
		id: ID!
		sender: String!
		receiver: String!
		date: String!
	}
	type Query {
		allFriendsRequests: [FriendRequest]!
	}
	type Mutation {
		addFriendRequest(sender: String!, receiver: String!): FriendRequest
		acceptFriendRequest(senderId: String!, receiverId: String!): FriendRequest
		declineFriendRequest(senderId: String!, receiverId: String!): FriendRequest
	}
`;

export default friendRequestSchema;
