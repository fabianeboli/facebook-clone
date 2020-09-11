import { IContext } from "./../../environment.d";
import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IChat, IMessage } from "./../../models/Chat.Schema";
import Chat from "../../models/Chat.Schema";
import moment from "moment";

const chatResolver = {
	Query: {
		readChat: async (_root: any, { userIds }: IChat, context: IContext) => {
			checkIfAuthenticated(context);
			const chat = await Chat.findOne({
				userIds: { $in: [...userIds] },
			}).populate("messages.author");
			if (chat) {
				return await chat;
			} else {
				return await new Chat({ userIds }).save();
			}
		},
	},
	Mutation: {
		createChat: async (_root: any, { userIds }: IChat, context: IContext) => {
			checkIfAuthenticated(context);
			return await new Chat({ userIds }).save();
		},
		sendMessage: async (
			_root: any,
			{ userIds, author, message }: IChat & IMessage,
			context: IContext
		) => {
			checkIfAuthenticated(context);
			return await Chat.findOneAndUpdate(
				{ userIds: { $in: [...userIds] } },
				{
					$push: { messages: { author, message } },
				}
			);
		},
	},
};

export default chatResolver;
