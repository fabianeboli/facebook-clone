import userSchema from "./typeDefs/user.schema";
import postSchema from "./typeDefs/post.schema";
import { mergeTypes } from "merge-graphql-schemas";
import commentSchema from "./typeDefs/comment.schema";
import friendRequest from "./typeDefs/friendRequest.schema";

const typeDefs = mergeTypes([userSchema, postSchema, commentSchema, friendRequest], { all: true });

export default typeDefs;
