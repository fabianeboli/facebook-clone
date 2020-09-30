import "../styles/globals.css";
import React from "react";
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider,
	split,
} from "@apollo/client";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { createUploadLink } from "apollo-upload-client";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../theme.style";
import { setContext } from "apollo-link-context";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

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

const uploadLink = createUploadLink({
	uri: "http://localhost:4000/graphql",
});

const wsLink = process.browser
	? new WebSocketLink({
			uri: "ws://localhost:4000/subscriptions",
			options: {
				reconnect: true,
			},
	  })
	: null;

const splitLink = process.browser
	? split(
			({ query }) => {
				const definition = getMainDefinition(query);
				return (
					definition.kind === "OperationDefinition" &&
					definition.operation === "subscription"
				);
			},
			wsLink,
			authLink.concat(uploadLink)
	  )
	: uploadLink;

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: splitLink,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// link: authLink.concat(uploadLink),
});

const MyApp = ({ Component, pageProps }): JSX.Element => {
	// eslint-disable-next-line react/prop-types
	const store = useStore(pageProps.initialReduxStore);

	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Head>
						<title>Facebook clone </title>
						<meta charSet="utf-8" />
						{/* Use minimum-scale=1 to enable GPU rasterization */}
						<meta
							name="viewport"
							content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
						/>
						<meta
							name="Description"
							content="A facebook clone - personal project"
						/>
						<link rel="icon" href="/favicon.ico" />
						<link
							href="https://fonts.googleapis.com/css2?family=Passion+One&family=Noto+Sans:wght@400;700&display=swap"
							rel="stylesheet"
						></link>
					</Head>

					<Navbar>
						<Component {...pageProps} />
					</Navbar>
				</ThemeProvider>
			</ApolloProvider>
		</Provider>
	);
};

export default MyApp;
