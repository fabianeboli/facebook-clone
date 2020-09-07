import { gql } from "@apollo/client";

export const ADD_FRIEND_REQUEST = gql`
	mutation addFriendRequest($sender: String!, $receiver: String!) {
		addFriendRequest(sender: $sender, receiver: $receiver) {
			id
		}
	}
`;

export const ACCEPT_FRIEND_REQUEST = gql`
	mutation acceptFriendRequest($senderId: String!, $receiverId: String!) {
		acceptFriendRequest(senderId: $senderId, receiverId: $receiverId) {
			id
		}
	}
`;

export const DECLINE_FRIEND_REQUEST = gql`
	mutation declineFriendRequest($senderId: String!, $receiverId: String!) {
		declineFriendRequest(senderId: $senderId, receiverId: $receiverId) {
			id
		}
	}
`;
