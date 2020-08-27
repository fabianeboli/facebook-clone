import { IContext } from "./../environment.d";
import { AuthenticationError } from "apollo-server-express";

export const checkIfAuthenticated = (context: IContext) => {
	if (!context.currentUser) {
		throw new AuthenticationError("Not authenticated");
	}
};
