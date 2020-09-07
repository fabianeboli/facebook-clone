import uniqueValidator from "mongoose-unique-validator";
import { Schema } from "mongoose";
import mongoose from "mongoose";
import moment from "moment";
moment.locale("en-gb");

export interface IMessage {
	author: string;
	message: string;
	sendDate?: string;
}

export interface IChat extends Document {
	userIds: string[];
	messages: IMessage[];
}

const ChatSchema = new Schema({
	userIds: [{ type: Schema.Types.ObjectId, ref: "User" }],

	messages: [
		{
			author: { type: Schema.Types.ObjectId, ref: "User", required: true },
			message: { type: String, required: true },
			sendDate: {
				type: String,
				required: true,
				default: moment().format("LLL"),
			},
		},
	],
});

ChatSchema.plugin(uniqueValidator);

const Channel = mongoose.model("Chat", ChatSchema);

export default Channel;
