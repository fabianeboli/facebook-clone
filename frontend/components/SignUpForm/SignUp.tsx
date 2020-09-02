import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../queries/user.query";

const SignUp = (): JSX.Element => {
	const [addUser] = useMutation(ADD_USER);

	const [firstName, setFirstName] = useState<string>("John");
	const [lastName, setLastName] = useState<string>("SuperTestowy");
	const [email, setEmail] = useState<string>("test231@test.pl");
	const [password, setPassword] = useState<string>("test");
	const [gender, setGender] = useState<string>("Male");
	const [dateOfBirth, setDateOfBirth] = useState<string>("23-10-1000");

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
		<div>
			<h1>Sign Up</h1>
			<form>
				<input
					type="text"
					required
					placeholder="First Name"
					value={firstName}
					onChange={({ target }) => setFirstName(target.value)}
				/>
				<input
					type="text"
					required
					placeholder="Last Name"
					value={lastName}
					onChange={({ target }) => setLastName(target.value)}
				/>
				<input
					type="text"
					required
					placeholder="email"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
				/>

				<input
					type="text"
					required
					placeholder="Password"
					value={password}
					onChange={({ target }) => setPassword(target.value)}
				/>
				<input
					type="text"
					required
					placeholder="Date of birth"
					value={dateOfBirth}
					onChange={({ target }) => setDateOfBirth(target.value)}
				/>
				<div>
					<input
						type="radio"
						required
						name="genderChoice1"
						value="Male"
						onChange={({ target }) => setGender(target.value)}
					/>
					<label htmlFor="genderChoice1">Male</label>

					<input
						type="radio"
						required
						name="genderChoice2"
						value="Female"
						onChange={({ target }) => setGender(target.value)}
					/>
					<label htmlFor="genderChoice2">Female</label>

					<input
						type="radio"
						required
						name="genderChoice1"
						value="Other/Prefer not to say"
						onChange={({ target }) => setGender(target.value)}
					/>
					<label htmlFor="genderChoice3">Other/Prefer not to say</label>
					<button onClick={submit}>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
