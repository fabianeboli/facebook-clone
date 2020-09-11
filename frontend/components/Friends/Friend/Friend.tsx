import React from "react";

export interface IFriend {
	id?: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

const Friend = (props: IFriend): JSX.Element => {
	return (
		<div>
			<img src={props.avatar} />
			<p>
				{" "}
				{props.firstName} {props.lastName}{" "}
			</p>
		</div>
	);
};

export default Friend;
