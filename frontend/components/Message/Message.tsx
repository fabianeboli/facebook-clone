import React from "react";



export interface IMessage {
	author: string;
	message: string;
	sendDate: string;
}

const Message = ({ author, message, sendDate }: IMessage): JSX.Element => {
	return (
		<div>
			<strong>{author}</strong> <em>{sendDate}</em>
			<p> {message} </p>
		</div>
	);
};

export default Message;
