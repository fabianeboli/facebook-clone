import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../queries/user.query";
import * as S from "./SignUp.style";

const SignUp = (): JSX.Element => {
	const [addUser] = useMutation(ADD_USER, {
		onError: (error) => {
			alert(error.message);
		},
		onCompleted: () => {
			alert("New profile was created. Please sign in.");
		}
	});

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [gender, setGender] = useState<string>("");
	const [dateOfBirth, setDateOfBirth] = useState<string>("");

	const submit = async (event) => {
		event.preventDefault();
		await addUser({
			variables: { firstName, lastName, email, gender, dateOfBirth, password },
		});

		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setGender("");
		setDateOfBirth("");
	};

	return (
		<>
			<S.outerContainer>
				<S.header>Sign Up</S.header>
				<form>
					<S.inputGroup>
						<S.input
							type="text"
							required
							placeholder="first Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<S.input
							type="text"
							required
							placeholder="last Name"
							value={lastName}
							onChange={({ target }) => setLastName(target.value)}
						/>
						<S.input
							type="text"
							required
							placeholder="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>

						<S.input
							type="password"
							required
							placeholder="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<S.input
							type="date"
							required
							placeholder="date of birth"
							value={dateOfBirth}
							onChange={({ target }) => setDateOfBirth(target.value)}
						/>
					</S.inputGroup>

					<div>
						<S.input
							type="radio"
							required
							name="gender"
							value="Male"
							onChange={({ target }) => setGender(target.value)}
						/>
						<label htmlFor="Male">Male</label>

						<S.input
							type="radio"
							required
							name="gender"
							value="Female"
							onChange={({ target }) => setGender(target.value)}
						/>
						<label htmlFor="Female">Female</label>

						<S.input
							type="radio"
							required
							name="gender"
							value="Other/Prefer not to say"
							onChange={({ target }) => setGender(target.value)}
						/>
						<label htmlFor="Other/Prefer not to say">
							Other/Prefer not to say
						</label>
					</div>
				</form>
				<S.submit onClick={submit}>Submit</S.submit>
			</S.outerContainer>
		</>
	);
};

export default SignUp;
