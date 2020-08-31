import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import { Gender } from "./../../populate";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from "bcrypt";
import { UserInputError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import User from "../../models/User.Schema";

interface IUser {
	id?: string;
	firstName?: string;
	lastName?: string;
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
		findUserById: (root: any, { id }: { id: string }) =>
			User.findOne({ _id: id }),
	},
	Mutation: {
		addUser: async (
			root: any,
			{ firstName, lastName, email, gender, dateOfBirth, password }: IUser
		) => {
			const saltRounds = Object.freeze(10);

			return await new User({
				firstName,
				lastName,
				email,
				gender,
				dateOfBirth,
				hashedPassword: await bcrypt.hash(password, saltRounds),
			}).save();
		},
		editUser: async (
			root: any,
			{ id, firstName, lastName, email, gender, dateOfBirth }: IUser,
			context: IContext
		) => {
			checkIfAuthenticated(context);

			return await User.findByIdAndUpdate(id, {
				firstName,
				lastName,
				email,
				gender,
				dateOfBirth,
			});
		},
		deleteUser: async (root: any, { id }: { id: string }) => {
			return await User.findByIdAndDelete(id);
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
				firstName: user.firstName,
				lastName: user.lastName
			};
		},
	},
};

export default userResolver;
