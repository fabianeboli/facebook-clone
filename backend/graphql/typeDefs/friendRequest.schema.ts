import { gql } from "apollo-server-express";

const friendRequest = gql`
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
		acceptFriendRequest(id: String!): FriendRequest
		declineFriendRequest(id: String!): FriendRequest
	}
`;

export default friendRequest;
