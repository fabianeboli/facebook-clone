import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import { useRouter } from "next/router";
import * as S from "../styles/index.style";

export default function Home(): JSX.Element {
	const [id, setId] = useState<string>("");
	const router = useRouter();

	useEffect(() => {
		setId(localStorage.getItem("id"));
		id && router.push("/main");
	}, [id]);

	return (
		<>
			<S.rectangle src="/images/rectangle.svg" />
			<S.container>
				<S.SignIn>
					<SignIn />
				</S.SignIn>
				<S.signUp>
					<SignUp />
				</S.signUp>
			</S.container>
			<S.girlTablet src="/images/girlTablet.svg" />
			<S.girlLamp src="/images/girlLamp.svg" />
		</>
	);
}
