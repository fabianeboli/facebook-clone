import React from "react";
import * as S from "./Message.style";

export interface IMessage {
	author: string;
	message: string;
	sendDate: string;
	isLoggedUser: boolean;
}

const Message = ({
	author,
	message,
	sendDate,
	isLoggedUser,
}: IMessage): JSX.Element => {
	return (
		<S.messageContainer isLoggedUser={isLoggedUser}>
			<strong>{author}</strong> <em>{sendDate}</em>
			<p> {message} </p>
		</S.messageContainer>
	);
};

export default Message;
