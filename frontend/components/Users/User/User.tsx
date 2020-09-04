import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND_REQUEST } from "../../../queries/friendRequest.query";
import {
	FIND_USER_FRIEND_REQUESTS_BY_ID,
} from "../../../queries/user.query";

export interface IUser {
	loggedUserId: string;
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
	userFriends: string[];
	userFriendsRequests: string[];
}

const User = (props: IUser): JSX.Element => {
	const [addFriendRequest] = useMutation(ADD_FRIEND_REQUEST, {
		refetchQueries: [
			{ query: FIND_USER_FRIEND_REQUESTS_BY_ID, variables: { id: props.id } },
		],
	});

	const handleSendFriendRequest = () => {
		addFriendRequest({
			variables: { sender: props.loggedUserId, receiver: props.id },
		});
	};

	const checkConditions = (
		userId: string,
		loggedUserId: string,
		userFriendRequests: string[],
		userFriends: string[]
	): boolean => {
		if (
			userId === loggedUserId ||
			userFriendRequests?.find((id: string) => id) ||
			userFriends?.find((id: string) => id)
		)
			return false;
		return true;
	};

	return (
		<div>
			{props.firstName} {props.lastName} {props.email} {props.gender}{" "}
			{checkConditions(
				props.id,
				props.loggedUserId,
				props.userFriends,
				props.userFriendsRequests
			) && (
				<button onClick={handleSendFriendRequest}> Send Friend Request </button>
			)}
		</div>
	);
};

export default User;
