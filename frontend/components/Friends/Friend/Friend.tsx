import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { REMOVE_FROM_FRIENDS } from "../../../queries/user.query";
import Chat from "../../Chat/Chat";
import * as S from "./Friend.style";
import { v4 as uuid } from "uuid";

export interface IFriend {
	id?: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

const Friend = (props: IFriend): JSX.Element => {
	const [id, setId] = useState<string>("");
	const [toggleChat, setToggleChat] = useState<boolean>(false);

	const [removeFriend] = useMutation(REMOVE_FROM_FRIENDS);

	const handleRemove = async (id: string, friendId: string) => {
		await removeFriend({ variables: { id, friendId } });
	};

	return (
		<>
			<S.container>
				<S.avatar src={props.avatar ?? "/images/user-solid.svg"} />
				<S.innerContainer>
					<S.userDetails>
						{" "}
						{props.firstName} {props.lastName}{" "}
					</S.userDetails>
					<S.buttonsContainer>
						<S.button onClick={() => setToggleChat(!toggleChat)}>
							<S.message size={32} />
						</S.button>
						<S.button onClick={() => handleRemove(id, props.id)}>
							<S.removeFriend size={32} />
						</S.button>
					</S.buttonsContainer>
				</S.innerContainer>
			</S.container>

			{toggleChat && <Chat key={uuid()} friendsId={props.id} />}
		</>
	);
};

export default Friend;
