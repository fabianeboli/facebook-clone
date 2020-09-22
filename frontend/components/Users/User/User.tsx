import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND_REQUEST } from "../../../queries/friendRequest.query";
import { FIND_USER_FRIEND_REQUESTS_BY_ID } from "../../../queries/user.query";
import UserProfile from "../../UserProfile/UserProfile";
import * as S from "./User.style";

export interface IUser {
	loggedUserId: string;
	id: string;
	firstName: string;
	lastName: string;
	avatar: string;
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
		userFriendRequests: any,
		userFriends: any
	): boolean => {
		if (
			userId === loggedUserId ||
			userFriendRequests?.find(
				(friendRequest: any) => friendRequest.id === props.id
			) ||
			userFriends?.find((friend: any) => friend.id === props.id)
		) {
			return false;
		}
		return true;
	};

	return (
		<S.container>
			<div>
				<S.avatar src={props.avatar || "/images/user-solid.svg"} />
			</div>

			<div>
				{props.firstName} {props.lastName}
			</div>
			<div>{props.email}</div>
			<S.buttonContainer>
				<S.button onClick={() => setUserProfile(!userProfile)}>
					{" "}
					{userProfile ? (
						<p>Hide</p>
					) : (
						<>
							<S.showProfile size={24} />
						</>
					)}{" "}
				</S.button>
				<div>{userProfile && <UserProfile id={props.id} />}</div>
				{checkConditions(
					props.id,
					props.loggedUserId,
					props.userFriendsRequests,
					props.userFriends
				) && (
					<S.button onClick={handleSendFriendRequest}>
						{" "}
						<S.friendRequest size={24} />{" "}
					</S.button>
				)}
			</S.buttonContainer>
		</S.container>
	);
};

export default User;
