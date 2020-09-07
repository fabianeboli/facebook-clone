import postResolver from "./resolvers/post.resolver";
import userResolver from "./resolvers/user.resolver";
import friendResolver from "./resolvers/friendRequest.resolver";
import commentResolver from "./resolvers/comment.resolver";
import chatResolver from "./resolvers/chat.resolver";

const resolvers = [
	postResolver,
	userResolver,
	friendResolver,
	commentResolver,
	chatResolver,
];

export default resolvers;
