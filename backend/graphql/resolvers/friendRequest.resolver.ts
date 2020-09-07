import { checkIfAuthenticated } from "./../../utils/helperFunctions";
import { IContext } from "./../../environment.d";
import { IFriendRequest } from "./../../models/FriendRequest.Schema";
import FriendRequest from "../../models/FriendRequest.Schema";
import moment from "moment";
import User from "../../models/User.Schema";

interface IContact {
	sender: string;
	receiver: string;
}

const friendResolver = {
	Query: {
		allFriendsRequests: async (root: any): Promise<IFriendRequest[]> =>
			await FriendRequest.find({}),
	},
	Mutation: {
		addFriendRequest: async (
			root: any,
			{ sender, receiver }: IContact,
			context: IContext
		): Promise<void> => {
			checkIfAuthenticated(context);

			const friendRequest = await new FriendRequest({
				sender,
				receiver,
				date: moment().format("LLL"),
			}).save();

			await User.findByIdAndUpdate(sender, {
				$push: { friendRequests: friendRequest.receiver },
			});
			await User.findByIdAndUpdate(receiver, {
				$push: { friendRequests: friendRequest.sender },
			});
		},
		acceptFriendRequest: async (
			root: any,
			{ senderId, receiverId }: { senderId: string; receiverId: string },
			context: IContext
		): Promise<void> => {
			checkIfAuthenticated(context);

			//const foundFriendRequest = await FriendRequest.findById(id);

			// remove from friend request
			await User.findByIdAndUpdate(senderId, {
				$pull: { friendRequests: receiverId },
			});
			await User.findByIdAndUpdate(receiverId, {
				$pull: { friendRequests: senderId },
			});

			// add to friendList
			await User.findByIdAndUpdate(senderId, {
				$push: { friends: receiverId },
			});
			await User.findByIdAndUpdate(receiverId, {
				$push: { friends: senderId },
			});

			await FriendRequest.findOneAndDelete({
				sender: senderId,
				receiver: receiverId,
			});
		},
		declineFriendRequest: async (
			root: any,
			{ senderId, receiverId }: { senderId: string; receiverId: string },
			context: IContext
		): Promise<void> => {
			checkIfAuthenticated(context);

			await User.findByIdAndUpdate(senderId, {
				$pull: { friendRequests: receiverId },
			});
			await User.findByIdAndUpdate(receiverId, {
				$pull: { friendRequests: senderId },
			});

			await FriendRequest.findOneAndDelete({
				sender: senderId,
				receiver: receiverId,
			});
		},
	},
};

export default friendResolver;
