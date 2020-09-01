import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface IPost extends Document {
	user?: any;
	content: string;
	date: string;
	comments?: string[];
	likedBy: string[];
	userId?: string;
	likes?: number;
}

const PostSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User" },
	content: { type: String, required: true },
	date: { type: String, required: true },
	likes: { type: Number, default: 0 },
	likedBy: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
	comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
});

PostSchema.plugin(uniqueValidator);

const Post = mongoose.model<IPost>("Post", PostSchema);

export default Post;
