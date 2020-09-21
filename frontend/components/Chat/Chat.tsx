import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { READ_CHAT, SEND_MESSAGE } from "../../queries/chat.query";
import Message, { IMessage } from "../Message/Message";
import { v4 as uuid } from "uuid";
import * as S from "./Chat.style";

interface IChat {
	friendsId: string;
}

const Chat = ({ friendsId }: IChat): JSX.Element => {
	const [id, setId] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

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

	if (loading) return <div>loading...</div>;
	console.log("DATA CHAT", data.readChat.messages);

	const messages = data.readChat.messages;

	return (
		<>
			Chat {messages[0].author.firstName}
			{messages.map((message) => (
				<Message
					key={uuid()}
					author={message.author.firstName}
					message={message.message}
					sendDate={message.sendDate}
				/>
			))}
			<input
				type="text"
				value={message}
				onChange={({ target }) => setMessage(target.value)}
			/>
			<button type="submit" onClick={handleMessage}>
				Send Message
			</button>
		</>
	);
};

export default Chat;
