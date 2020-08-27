/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import Post, { IPost } from "../../models/Post.Schema";
import { AuthenticationError, UserInputError } from "apollo-server-express";
import User from "../../models/User.Schema";

const postResolver = {
	Query: {
		allPosts: async (): Promise<IPost[]> =>
			await Post.find({}).populate("user comments"),
	},
	Mutation: {
		addPost: async (
			root: any,
			{ content, date }: IPost,
			context: IContext
		): Promise<IPost> => {
			checkIfAuthenticated(context);

			const foundUser = await User.findById(context.currentUser._id);
			console.log(foundUser);
			const post = new Post({ user: foundUser?._id, content, date }).populate(
				"user"
			);
			try {
				return await post.save();
			} catch (error) {
				throw new UserInputError(error.message, {
					invalidArgs: { foundUser, content, date },
				});
			}
		},
		likePost: async (root: any, { id }: IPost, context: IContext) => {
			checkIfAuthenticated(context);

			return await Post.findByIdAndUpdate(id, { $inc: { likes: 1 } });
		},
		deletePost: async (
			root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<IPost | null> => {
			checkIfAuthenticated(context);

			return await Post.findByIdAndDelete(id);
		},
	},
};

export default postResolver;
