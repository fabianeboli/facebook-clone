import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { READ_CHAT, SEND_MESSAGE } from "../../queries/chat.query";
import Message from "../Message/Message";
import { v4 as uuid } from "uuid";
import * as S from "./Chat.style";
import { FIND_USER_NAME_BY_ID } from "../../queries/user.query";

interface IChat {
	friendsId: string;
}

const Chat = ({ friendsId }: IChat): JSX.Element => {
	const [id, setId] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const friendsName = useQuery(FIND_USER_NAME_BY_ID, {
		variables: { id: friendsId },
	});

	const { data, loading } = useQuery(READ_CHAT, {
		variables: { userIds: [id, friendsId] },
		pollInterval: 500,
	});

	const [sendMessage] = useMutation(SEND_MESSAGE);

	const handleMessage = async () => {
		await sendMessage({
			variables: { userIds: [id, friendsId], author: id, message },
		});
		setMessage("");
	};

	if (loading || friendsName.loading) return <div>loading...</div>;

	const { firstName, lastName } = friendsName.data.findUserById;

	const messages = data.readChat.messages;
	return (
		<S.container>
			<S.title>
				Chat between{" "}
				{`${localStorage.getItem("firstName")} ${localStorage.getItem(
					"lastName"
				)} `}{" "}
				and {firstName} {lastName}
				{messages[0].author.lastName}
			</S.title>
			{messages.map((message) => (
				<Message
					key={uuid()}
					author={message.author.firstName}
					message={message.message}
					sendDate={message.sendDate}
					isLoggedUser={message.author.id === id}
				/>
			))}
			<S.sendContainer>
				<S.messageInput
				
					value={message}
					onChange={({ target }) => setMessage(target.value)}
				/>
				<S.sendButton type="submit" onClick={handleMessage}>
					<S.sendIcon size={32} />
				</S.sendButton>
			</S.sendContainer>
		</S.container>
	);
};

export default Chat;
