/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import { Gender } from "./../../populate";
import bcrypt from "bcrypt";
import { UserInputError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import User from "../../models/User.Schema";

interface IUser {
	id?: string;
	firstName?: string;
	lastName?: string;
	avatar?: string;
	email?: string;
	gender?: Gender;
	dateOfBirth?: string;
	password?: string;
}

const userResolver = {
	Query: {
		allUsers: async () =>
			await User.find({}).populate("friendRequests friends"),
		findUser: (
			root: any,
			{ firstName, lastName }: { firstName: string; lastName: string }
		) => User.find({ firstName, lastName }),
		findUserById: (root: any, { id }: { id: string }) => User.findById(id),
		findUserFriendsById: async (root: any, { id }: { id: string }) =>
			await User.find({ _id: id }).populate("friends"),
		findUserFriendsRequestsById: async (root: any, { id }: { id: string }) =>
			await User.find({ _id: id }).populate("friendRequests"),
	},
	Mutation: {
		addUser: async (
			root: any,
			{
				firstName,
				lastName,
				avatar,
				email,
				gender,
				dateOfBirth,
				password,
			}: IUser
		) => {
			const saltRounds = Object.freeze(10);

			return await new User({
				firstName,
				lastName,
				avatar,
				email,
				gender,
				dateOfBirth,
				hashedPassword: await bcrypt.hash(password, saltRounds),
			}).save();
		},
		editUser: async (
			root: any,
			{ id, firstName, lastName, avatar, email, gender, dateOfBirth }: IUser,
			context: IContext
		) => {
			checkIfAuthenticated(context);

			return await User.findByIdAndUpdate(id, {
				firstName,
				lastName,
				avatar,
				email,
				gender,
				dateOfBirth,
			});
		},
		deleteUser: async (root: any, { id }: { id: string }) => {
			return await User.findByIdAndDelete(id);
		},
		removeFromFriends: async (
			root: any,
			{ id, friendId }: { id: string; friendId: string }
		) => {
			return await User.findByIdAndUpdate(id, { $pull: { friends: friendId } });
		},
		login: async (
			root: any,
			{ email, password }: { email: string; password: string }
		) => {
			const user = await User.findOne({ email });

			if (!user || !bcrypt.compare(password, user.hashedPassword)) {
				throw new UserInputError("Wrong Credentials");
			}

			const userForToken = {
				email: user.email,
				id: user._id,
			};

			return {
				value: jwt.sign(userForToken, process.env.JWT_SECRET),
				id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
			};
		},
	},
};

export default userResolver;
