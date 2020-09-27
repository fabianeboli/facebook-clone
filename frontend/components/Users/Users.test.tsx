import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import User, { IUser } from "./User/User";
import Users from "./Users";
import { MockedProvider } from "@apollo/client/testing";
import { ADD_FRIEND_REQUEST } from "../../queries/friendRequest.query";
import {
	ALL_USERS,
	FIND_USER_FRIENDS_BY_ID,
	FIND_USER_FRIEND_REQUESTS_BY_ID,
} from "../../queries/user.query";

describe("Users renders", () => {
	const user: IUser = {
		id: "32131ew",
		firstName: "John",
		lastName: "Test",
		email: "John@test.com",
		gender: "Male",
		avatar: "",
		loggedUserId: "32111e",
		userFriends: ["42131ew"],
		userFriendsRequests: [],
		dateOfBirth: "1976-10-12",
	};

	const userTwo: IUser = {
		id: "5f4e0bab4e23a8ae053da4d5",
		firstName: "John",
		lastName: "Test",
		email: "John@test.com",
		gender: "Male",
		avatar: "",
		loggedUserId: "32111ew",
		userFriends: ["32131ew"],
		userFriendsRequests: [],
		dateOfBirth: "1976-10-12",
	};

	const usersMocks = [
		{
			request: {
				query: ALL_USERS,
			},
			result: { data: { allUsers: [user, userTwo] } },
		},

		{
			request: {
				query: FIND_USER_FRIEND_REQUESTS_BY_ID,
				variables: { id: user.id },
			},
			result: {
				data: { friendRequests: [userTwo] },
			},
		},
		{
			request: {
				query: FIND_USER_FRIENDS_BY_ID,
				variables: { id: user.id },
			},
			result: {
				data: { friends: [userTwo] },
			},
		},
	];

	const userMocks = [
		{
			request: {
				query: ADD_FRIEND_REQUEST,
				variables: { id: user.id },
			},
			result: { data: { userTwo } },
		},
		{
			request: {
				query: FIND_USER_FRIENDS_BY_ID,
				variables: { id: user.id },
			},
			result: { data: { userTwo } },
		},
		{
			request: {
				query: FIND_USER_FRIEND_REQUESTS_BY_ID,
				variables: { id: user.id },
			},
			result: {
				data: { friendRequests: [userTwo] },
			},
		},
	];

	let userComponent;

	let usersComponent;
	

	beforeEach(() => {
		userComponent = render(
			<MockedProvider mocks={userMocks} addTypename={false}>
				<User
					id={user.id}
					firstName={user.firstName}
					lastName={user.lastName}
					email={user.email}
					gender={user.gender}
					loggedUserId={user.loggedUserId}
					dateOfBirth={user.dateOfBirth}
					userFriendsRequests={user.userFriendsRequests}
					userFriends={user.userFriends}
					avatar={user.avatar}
				/>
			</MockedProvider>
		);
		usersComponent = render(
			<MockedProvider mocks={usersMocks} addTypename={false}>
				<Users />
			</MockedProvider>
		);
	});

	test("User names are rendered", () => {
		expect(userComponent.container).toHaveTextContent(user.firstName);
		expect(userComponent.container).toHaveTextContent(user.lastName);
	});

	test("User default avatar is rendered", () => {
		const image = screen.getByAltText("Profile avatar");
		expect(image.getAttribute("src") == "/images/user-solid.svg").toBeTruthy();
	});

	
});
