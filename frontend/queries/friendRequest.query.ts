import { gql } from "@apollo/client";

export const ADD_FRIEND_REQUEST = gql`
	mutation addFriendRequest($sender: String!, $receiver: String!) {
		addFriendRequest(sender: $sender, receiver: $receiver) {
			id
		}
	}
`;

export const ACCEPT_FRIEND_REQUEST = gql`
	mutation acceptFriendRequest($id: String!) {
		acceptFriendRequest(id: $id) {
			id
		}
	}
`;

export const DECLINE_FRIEND_REQUEST = gql`
	mutation declineFriendRequest($id: String!) {
		declineFriendRequest(id: $id) {
			id
		}
	}
`;
