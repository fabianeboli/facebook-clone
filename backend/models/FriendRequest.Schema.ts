import mongoose, { Schema, Document } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

export interface IFriendRequest extends Document {
	sender: string;
	receiver: string;
	date: string;
}

const FriendRequestSchema = new Schema({
	sender: { type: mongoose.Types.ObjectId, ref: "User", required: true },
	receiver: { type: mongoose.Types.ObjectId, ref: "User", required: true },
	date: { type: String, required: true },
});

FriendRequestSchema.plugin(mongooseUniqueValidator);

const FriendRequest = mongoose.model<IFriendRequest>(
	"FriendRequest",
	FriendRequestSchema
);

export default FriendRequest;
