import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND_REQUEST } from "../../../queries/friendRequest.query";
import { FIND_USER_FRIEND_REQUESTS_BY_ID } from "../../../queries/user.query";
import UserProfile from "../../UserProfile/UserProfile";

export interface IUser {
	loggedUserId: string;
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
	dateOfBirth?: string;
	userFriends: string[];
	userFriendsRequests: string[];
}

const User = (props: IUser): JSX.Element => {
	const [userProfile, setUserProfile] = useState<boolean>(false);

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
			<button onClick={() => setUserProfile(!userProfile)}>
				{" "}
				{userProfile ? <p>Hide</p> : <p>Show</p>} profile
			</button>
			<div>{userProfile && <UserProfile id={props.id} />}</div>
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
