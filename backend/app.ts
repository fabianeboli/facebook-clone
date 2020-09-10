import cloudinary from "cloudinary";
// import cloudinary from "cloudinary";
//import { populate } from "./populate";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoose, { connection } from "mongoose";
import cors from "cors";
import { ApolloServer, PubSub } from "apollo-server-express";
import moment from "moment";
import jwt from "jsonwebtoken";
import User from "./models/User.Schema";
import typeDefs from "./graphql/typeDef";
import resolvers from "./graphql/resolver";
// import { graphqlUploadExpress } from "graphql-upload";

dotenv.config();
moment.locale("en-gb");

cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT: number = Number(process.env.PORT) ?? 3001;
const MONGO_URI: string = process.env.MONGO_URI ?? "";

const app = express();

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const uri: any = process.env.MONGO_URI;

// app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));

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
});

app.use(morgan("tiny"));
app.use(cors());
//populate();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

export default app;
