import "../styles/globals.css";
import React from "react";
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider,
	split,
} from "@apollo/client";
//import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "apollo-link-context";
import { Provider } from "react-redux";
import { useStore } from "../store";
//import { WebSocketLink } from "@apollo/link-ws";

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");
	return {
		headers: {
			...headers,
			authorization: token && `bearer ${token}`,
		},
	};
});

const httpLink: HttpLink = new HttpLink({
	uri: "http://localhost:4000/graphql",
});

// const wsLink = new WebSocketLink({
// 	uri: "ws://localhost:4000/graphql",
// 	option: {
// 		reconnect: true,
// 	},
// });

// const splitLink = split(
// 	({ query }) => {
// 		const definition = getMainDefinition(query);
// 		return (
// 			definition.kind === "OperationDefinition" &&
// 			definition.operation === "subscription"
// 		);
// 	},
// 	wsLink,
// 	authLink.concat(httpLink)
// );


const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
	// link: splitLink,
});

const MyApp = ({ Component, pageProps }): JSX.Element => {
	// eslint-disable-next-line react/prop-types
	const store = useStore(pageProps.initialReduxStore);

	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Provider>
	);
};

export default MyApp;
