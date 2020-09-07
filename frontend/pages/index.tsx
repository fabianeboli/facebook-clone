import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Users from "../components/Users/Users";
import SignIn from "../components/SignIn/SignIn";
import Posts from "../components/Posts/Posts";
import Friends from "../components/Friends/Friends";
import FriendRequests from "../components/FriendRequests/FriendRequests";
import SignUp from "../components/SignUpForm/SignUp";
import NewPost from "../components/NewPost/NewPost";
import UserProfile from "../components/UserProfile/UserProfile";

export default function Home(): JSX.Element {

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SignIn />
			<SignUp />
			<NewPost />
			<Users />
			<UserProfile />
			<FriendRequests />
			<Friends />
			<Posts />

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
