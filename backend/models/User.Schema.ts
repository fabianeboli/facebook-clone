import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface IUser extends Document {
	firstName: string;
	lastName: string;
	email: string;
	hashedPassword: string;
	gender: string;
	dateOfBirth: string;
	avatar?: string;
	friends?: string[];
	friendRequests?: string[];
	posts?: string;
}

const UserSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		match: [
			/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
			"Please fill a valid email address",
		],
	},
	gender: { type: String, enum: ["Male", "Female", "Other/Prefer not to say"] },
	dateOfBirth: { type: String, required: true },
	avatar: { type: String },
	hashedPassword: { type: String, required: true },
	friends: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
	friendRequests: [
		{ type: Schema.Types.ObjectId, ref: "User", default: [] },
	],
	posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
