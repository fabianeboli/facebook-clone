import React from "react";

export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
}

const User = (props: IUser): JSX.Element => {
	return (
		<div>
			{props.firstName}
			{props.lastName}
			{props.email}
			{props.gender}
		</div>
	);
};

export default User;
