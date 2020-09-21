import uniqueValidator from "mongoose-unique-validator";
import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
	user: string;
	post: string;
	content: string;
	date: string;
	likes?: number;
	comments: string[];
}

const CommentSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User" },
	post: { type: Schema.Types.ObjectId, ref: "Post" },
	content: { type: String, required: true },
	date: { type: String, required: true },
	likes: { type: Number, default: 0 },
	likedBy: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
	comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
});

mongoose.plugin(uniqueValidator);

const Comment = mongoose.model<IComment>("Comment", CommentSchema);

export default Comment;
