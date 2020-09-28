import userSchema from "./typeDefs/user.schema";
import postSchema from "./typeDefs/post.schema";
import { mergeTypes } from "merge-graphql-schemas";
import commentSchema from "./typeDefs/comment.schema";
import chatSchema from "./typeDefs/chat.schema";
import friendRequestSchema from "./typeDefs/friendRequest.schema";

const typeDefs: any = mergeTypes(
	[userSchema, postSchema, commentSchema, friendRequestSchema, chatSchema],
	{ all: true }
);

export default typeDefs;
