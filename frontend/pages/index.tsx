import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUpForm/SignUp";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
	const [id, setId] = useState<string>("");
	const router = useRouter();

	useEffect(() => {
		setId(localStorage.getItem("id"));
		router.push("main");
	}, []);

	const redirectIfSigned = () => id && router.push("main");

	return (
		<div className={styles.container}>
			{() => redirectIfSigned()}
			<SignIn />
			<SignUp />
		</div>
	);
}
