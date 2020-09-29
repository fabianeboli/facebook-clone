import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../queries/user.query";
import * as S from "./SignIn.style";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateId } from "../../reducers/loginReducer";

const SignIn = (): JSX.Element => {
	const [email, setEmail] = useState<string>("test@test.com");
	const [password, setPassword] = useState<string>("testtest");
	const [key, setKey] = useState<string>("");
	const state = useSelector(state => state);
	const dispatch = useDispatch();


	const [login, result] = useMutation(SIGN_IN, {
		onError: (error) => {
			alert(error.message);
		},
	});

	useEffect(() => {
		setKey(localStorage.getItem("token"));
		dispatch(updateId(localStorage.getItem("id")));
	}, []);

	useEffect(() => {
		
		if (result.data) {
			const token = result.data.login.value;
			const id = result.data.login.id;
			const firstName = result.data.login.firstName;
			const lastName = result.data.login.lastName;
			localStorage.setItem("token", token);
			localStorage.setItem("id", id);
			localStorage.setItem("firstName", firstName);
			localStorage.setItem("lastName", lastName);
		}
	}, [result.data]);

	const handleForm = async () => {
		await login({
			variables: { email, password },
		});
		window.location.reload();
	};

	const handleSignOut = () => {
		setKey("");
		localStorage.clear();
	};

	const SignInForm = (
		<S.container>
			<S.header>Sign In</S.header>
			<form>
				<S.input
					type="text"
					name="email"
					placeholder="email"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
				/>
				<S.input
					type="password"
					name="password"
					placeholder="password"
					value={password}
					onChange={({ target }) => setPassword(target.value)}
				/>
			</form>
			<S.submit onClick={handleForm} type="submit">
				Submit
			</S.submit>
		</S.container>
	);

	if (result.loading) return <Spinner />;

	return SignInForm;
};

export default SignIn;
