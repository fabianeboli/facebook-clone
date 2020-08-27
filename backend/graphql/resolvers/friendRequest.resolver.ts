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
				$push: { friendRequests: friendRequest._id },
			});
			await User.findByIdAndUpdate(receiver, {
				$push: { friendRequests: friendRequest._id },
			});
		},
		acceptFriendRequest: async (
			root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<void> => {
			checkIfAuthenticated(context);

			const foundFriendRequest = await FriendRequest.findById(id);

			if (foundFriendRequest) {
				// remove from friend request
				await User.findByIdAndUpdate(foundFriendRequest.sender, {
					$pull: { friendsRequests: foundFriendRequest._id },
				});
				await User.findByIdAndUpdate(foundFriendRequest.receiver, {
					$pull: { friendsRequests: foundFriendRequest._id },
				});

				// add to friendList
				await User.findByIdAndUpdate(foundFriendRequest.sender, {
					$push: { friends: foundFriendRequest.receiver },
				});
				await User.findByIdAndUpdate(foundFriendRequest.receiver, {
					$push: { friends: foundFriendRequest.sender },
				});
			}
			await FriendRequest.findByIdAndDelete(id);
		},
		declineFriendRequest: async (
			root: any,
			{ id }: { id: string },
			context: IContext
		): Promise<void> => {
			checkIfAuthenticated(context);

			const foundFriendRequest = await FriendRequest.findById(id);

			if (foundFriendRequest) {
				await User.findByIdAndUpdate(foundFriendRequest.sender, {
					$pull: { friendsRequests: foundFriendRequest.receiver },
				});
				await User.findByIdAndUpdate(foundFriendRequest.receiver, {
					$pull: { friendsRequests: foundFriendRequest.sender },
				});
			}
			await FriendRequest.findByIdAndDelete(id);
		},
	},
};

export default friendResolver;
