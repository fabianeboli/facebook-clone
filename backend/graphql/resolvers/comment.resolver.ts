import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import Comment, { IComment } from "../../models/Comment.Schema";
import Post from "../../models/Post.Schema";
import { pubsub } from "../../app";
import dayjs from "dayjs";

interface IMessage {
	id?: string;
	user: string;
	post: string;
	content: string;
	comment?: string[];
	date?: string;
}

const commentResolver = {
	Query: {
		allComments: async (): Promise<IComment[]> =>
			await Comment.find({}).populate("user"),
		isCommentLikedByUser: async (
			_root: any,
			{ id, userId }: any,
			context: IContext
		) => {
			checkIfAuthenticated(context);
			return await Comment.find({ _id: id, likedBy: userId }).count();
		},
	},
	Mutation: {
		addComment: async (
			_root: any,
			{ user, post, content }: IMessage,
			context: IContext
		): Promise<IComment> => {
			checkIfAuthenticated(context);

			const newComment = new Comment({
				user,
				post,
				content,
				date: dayjs().format("DD MMMM YYYY HH:mm:ss"),
			});
			await Post.findByIdAndUpdate(post, {
				$push: { comments: newComment._id },
			});

			pubsub.publish("COMMENT_ADDED", { commentAdded: newComment });

			return await newComment.save();
		},
		editComment: async (
			_root: any,
			{ id, content }: IMessage,
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			return await Comment.findByIdAndUpdate(id, {
				content,
				date: dayjs().format("DD MMMM YYYY HH:mm:ss"),
			});
		},
		likeComment: async (
			_root: any,
			{ id, userId }: { id: string; userId: string },
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			return await Comment.findByIdAndUpdate(id, {
				$inc: { likes: 1 },
				$push: { likedBy: userId },
			});
		},
		unlikeComment: async (
			_root: any,
			{ id, userId }: { id: string; userId: string },
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			return await Comment.findByIdAndUpdate(id, {
				$inc: { likes: -1 },
				$pull: { likedBy: userId },
			});
		},
		removeComment: async (
			_root: any,
			{ id, post }: IMessage,
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			await Post.findByIdAndUpdate(post, {
				$pull: { comments: id },
			});
			return await Comment.findByIdAndRemove(id);
		},
	},
	Subscription: {
		commentAdded: {
			subscribe: () => pubsub.asyncIterator(["COMMENT_ADDED"])
		}
	}
};

export default commentResolver;
