import moment from "moment";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import Post, { IPost } from "../../models/Post.Schema";
import { PubSub, UserInputError } from "apollo-server-express";
import User from "../../models/User.Schema";
import { pubsub } from "../../app";


const postResolver = {
	Query: {
		allPosts: async (): Promise<IPost[]> =>
			await Post.find({})
				.populate({
					path: "user comments likedBy",
					populate: { path: "user", model: "User" },
				})
				.sort({ date: 1 }),
		findPostById: async (
			_root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<IPost | null> => {
			checkIfAuthenticated(context);
			return await Post.findById(id).populate({
				path: "user comments likedBy",
				populate: { path: "user", model: "User" },
			});
		},
		isLikedByUser: async (
			_root: any,
			{ id, userId }: IPost,
			context: IContext
		) => {
			checkIfAuthenticated(context);
			return await Post.find({ _id: id, likedBy: userId }).count();
		},
	},
	Mutation: {
		addPost: async (_root: any, { content }: IPost, context: IContext) => {
			checkIfAuthenticated(context);
			const foundUser = await User.findById(context.currentUser._id);
			const post = new Post({
				user: foundUser?._id,
				content,
				date: moment().format("LLL"),
			}).populate("user");
			try {
				await foundUser?.update({ $push: { posts: post } });

				pubsub.publish("POST_ADDED", { postAdded: post });

				return await post.save();
			} catch (error) {
				throw new UserInputError(error.message, {
					invalidArgs: { foundUser, content },
				});
			}
		},
		likePost: async (_root: any, { id, userId }: IPost, context: IContext) => {
			checkIfAuthenticated(context);
			return await Post.findByIdAndUpdate(id, {
				$inc: { likes: 1 },
				$push: { likedBy: userId },
			});
		},
		unlikePost: async (
			_root: any,
			{ id, userId }: IPost,
			context: IContext
		) => {
			checkIfAuthenticated(context);
			return await Post.findByIdAndUpdate(id, {
				$inc: { likes: -1 },
				$pull: { likedBy: userId },
			});
		},

		deletePost: async (
			_root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<IPost | null> => {
			checkIfAuthenticated(context);
			return await Post.findByIdAndDelete(id);
		},
	},
	Subscription: {
		postAdded: {
			subscribe: () => pubsub.asyncIterator(["POST_ADDED"])
		}
	}
};

export default postResolver;
