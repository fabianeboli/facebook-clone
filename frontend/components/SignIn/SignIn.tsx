import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../queries/user.query";

const SignIn = (): JSX.Element => {
	const [email, setEmail] = useState<string>("test@test.com");
	const [password, setPassword] = useState<string>("testtest");
	const [error, setError] = useState<boolean>(false);

	const [key, setKey] = useState<string>("");

	const [login, result] = useMutation(SIGN_IN, {
		onError: (error) => {
			setError(true);
			alert(error.message);
		},
	});

	useEffect(() => {
		setKey(localStorage.getItem("token"));
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
		<div>
			<form>
				<input
					type="text"
					name="email"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={({ target }) => setPassword(target.value)}
				/>
			</form>
			<button onClick={handleForm} type="submit">
				Submit
			</button>
		</div>
	);

	if (result.loading) return <div>Loading...</div>;
	const signOut = <button onClick={handleSignOut}>Sign Out</button>;

	return key ? signOut : SignInForm;
};

export default SignIn;
