import moment from "moment";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import Post, { IPost } from "../../models/Post.Schema";
import { UserInputError } from "apollo-server-express";
import User from "../../models/User.Schema";

const postResolver = {
	Query: {
		allPosts: async (): Promise<IPost[]> =>
			await Post.find({}).populate("user comments likedBy"),
		findPostById: async (
			root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<IPost | null> => {
			checkIfAuthenticated(context);
			return await Post.findById(id);
		},
		isLikedByUser: async (
			root: any,
			{ id, userId }: IPost,
			context: IContext
		) => {
			checkIfAuthenticated(context);
			return await Post.find({ _id: id, likedBy: userId }).count();
		},
	},
	Mutation: {
		addPost: async (
			root: any,
			{ content }: IPost,
			context: IContext
		): Promise<IPost> => {
			checkIfAuthenticated(context);
			const foundUser = await User.findById(context.currentUser._id);
			const post = new Post({
				user: foundUser?._id,
				content,
				date: moment().format("LLL"),
			}).populate("user");
			try {
				return await post.save();
			} catch (error) {
				throw new UserInputError(error.message, {
					invalidArgs: { foundUser, content },
				});
			}
		},
		likePost: async (root: any, { id, userId }: IPost, context: IContext) => {
			checkIfAuthenticated(context);
			return await Post.findByIdAndUpdate(id, {
				$inc: { likes: 1 },
				$push: { likedBy: userId },
			});
		},
		unLikePost: async (root: any, { id, userId }: IPost, context: IContext) => {
			checkIfAuthenticated(context);
			return await Post.findByIdAndUpdate(id, {
				$inc: { likes: -1 },
				$pull: { likedBy: userId },
			});
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
