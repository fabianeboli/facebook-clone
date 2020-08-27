import { IUser } from "./models/User.Schema";
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: "development" | "production";
			PORT?: string;
			JWT_SECRET: string;
		}
	}
}

export {};

export interface IContext {
	currentUser: IUser;
}
