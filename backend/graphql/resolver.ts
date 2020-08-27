import postResolver from "./resolvers/post.resolver";
import userResolver from "./resolvers/user.resolver";
import friendResolver from "./resolvers/friendRequest.resolver";
import commentResolver from "./resolvers/comment.resolver";

const resolvers = [postResolver, userResolver, friendResolver, commentResolver];

export default resolvers;
