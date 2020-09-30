import cloudinary from "cloudinary";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import { ApolloServer, PubSub } from "apollo-server-express";
import jwt from "jsonwebtoken";
import User from "./models/User.Schema";
import typeDefs from "./graphql/typeDef";
import resolvers from "./graphql/resolver";
import { createServer } from "http";
import * as dayjs from "dayjs";

dotenv.config();
dayjs.locale("en-gb");

export const pubsub = new PubSub();

cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MONGO_URI: string = process.env.MONGO_URI ?? "";

const app = express();

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		const auth = req?.headers?.authorization;
		if (auth?.toLowerCase().startsWith("bearer ")) {
			const decodedToken: any = jwt.verify(
				auth.substring(7),
				process.env.JWT_SECRET
			);
			const currentUser = await User.findById(decodedToken.id);
			return { currentUser };
		}
		return;
	},
	subscriptions: {
		path: "/subscriptions",
	},
	playground: {
		subscriptionEndpoint: "/subscriptions",
	},
});

app.use(morgan("tiny"));
app.use(
	cors({
		origin: process.env.FRONT,
		
		preflightContinue: false,
	})
);

server.applyMiddleware({ app });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: process.env.PORT }, () => {
	console.log("🚀 Server ready");
	console.log("🚀 Subscriptions ready");
});

export default app;
