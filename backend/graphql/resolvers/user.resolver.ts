import { createReadStream } from "fs";
// import { processUpload } from "./../../utils/uploadFile";
import cloudinary from "cloudinary";
//import { uploadFile } from "../../utils/uploadFile";
import { IContext } from "./../../environment.d";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { checkIfAuthenticated } from "./../../utils/helperFunctions";
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

const photos: any[] = [];

const userResolver = {
	Query: {
		allUsers: async () =>
			await User.find({}).populate("friendRequests friends"),
		findUser: (
			root: any,
			{ firstName, lastName }: { firstName: string; lastName: string }
		) => User.find({ firstName, lastName }),
		findUserById: async (root: any, { id }: { id: string }) =>
			await User.findById(id).populate("friends"),
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
		uploadAvatar: async (
			_root: any,
			{ id, file }: { id: string; file: any },
			context: IContext
		) => {
			checkIfAuthenticated(context);

			const { filename, mimetype, encoding, createReadStream } = await file;

			try {
				console.log("I M GERE");

				const result: any = await new Promise((resolve, reject) => {
					createReadStream().pipe(
						cloudinary.v2.uploader.upload_stream((error, result) => {
							if (error) {
								reject(error);
							}

							resolve(result);
						})
					);
				});

				const newPhoto = {
					filename,
					mimetype,
					encoding,
					path: result.secure_url,
				};

				await User.findByIdAndUpdate(id, { avatar: result.secure_url });
				console.log("Result", result.secure_url);

				return newPhoto;
			} catch (err) {
				console.log("------EROR WHILE UPLOADING-------", err);
				return { filename: "", mimetype: "", encoding: "", path: "" };
			}
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
