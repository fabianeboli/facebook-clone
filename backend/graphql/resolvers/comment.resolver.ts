import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import Comment, { IComment } from "../../models/Comment.Schema";
import moment from "moment";
import Post from "../../models/Post.Schema";

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
	},
	Mutation: {
		addComment: async (
			root: any,
			{ user, post, content }: IMessage,
			context: IContext
		): Promise<IComment> => {
			checkIfAuthenticated(context);

			const newComment = await new Comment({
				user,
				post,
				content,
				date: moment().format("LLL"),
			}).populate("user");
			await Post.findByIdAndUpdate(post, {
				$push: { comments: newComment._id },
			});

			return await newComment.save();
		},
		editComment: async (
			root: any,
			{ id, content }: IMessage,
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			return await Comment.findByIdAndUpdate(id, {
				content,
				date: moment().format("LLL"),
			});
		},
		likeComment: async (
			root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			return await Comment.findByIdAndUpdate(id, { $inc: { likes: 1 } });
		},
		unlikeComment: async (
			root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<IComment | null> => {
			checkIfAuthenticated(context);

			return await Comment.findByIdAndUpdate(id, { $inc: { likes: -1 } });
		},
		removeComment: async (
			root: any,
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
};

export default commentResolver;
