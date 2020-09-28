import { gql } from "apollo-server-express";

const chatSchema = gql`
	type Chat {
		id: ID!
		userIds: [String]!
		messages: [Message]
	}
	type Message {
		id: ID!
		author: User!
		message: String!
		sendDate: String
	}
	type Query {
		readChat(userIds: [String]!): Chat!
	}
	type Mutation {
		createChat(userIds: [String]!): Chat
		sendMessage(userIds: [String!]!, author: String!, message: String!): Message
	}
	type Subscription {
		messageAdded: Message	
	}
`;

export default chatSchema;
