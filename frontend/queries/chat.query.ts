import { gql } from "@apollo/client";

export const READ_CHAT = gql`
	query readChat($userIds: [String]!) {
		readChat(userIds: $userIds) {
			messages {
				author {
					id
					firstName
				}
				message
				sendDate
			}
		}
	}
`;

export const CREATE_CHAT = gql`
	mutation createChat($userIds: [String]!) {
		createChat(userIds: $userIds) {
			userIds
		}
	}
`;

export const SEND_MESSAGE = gql`
	mutation sendMessage(
		$userIds: [String!]!
		$author: String!
		$message: String!
	) {
		sendMessage(userIds: $userIds, author: $author, message: $message) {
			id
		}
	}
`;
