import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
	FIND_USER_FRIENDS_BY_ID,
	REMOVE_FROM_FRIENDS,
} from "../../../queries/user.query";
import * as S from "./Friend.style";
import Link from "next/link";

export interface IFriend {
	id?: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

const Friend = (props: IFriend): JSX.Element => {
	const [id, setId] = useState<string>("");
	const [toggleChat, setToggleChat] = useState<boolean>(false);

	useEffect(() => {
		setId(localStorage.getItem("id"));
	}, []);

	const [removeFriend] = useMutation(REMOVE_FROM_FRIENDS, {
		refetchQueries: [
			{
				query: FIND_USER_FRIENDS_BY_ID,
				variables: { id },
			},
		],
	});

	const handleRemove = async (id: string, friendId: string) => {
		await removeFriend({ variables: { id, friendId } });
	};

	return (
		<>
			<S.container>
				<S.avatar
					src={props.avatar ?? "/images/user-solid.svg"}
					alt={`${props.firstName} ${props.lastName} avatar`}
				/>
				<S.innerContainer>
					<S.userDetails>
						{" "}
						{props.firstName} {props.lastName}{" "}
					</S.userDetails>
					<S.buttonsContainer>
						<S.button onClick={() => setToggleChat(!toggleChat)}>
							<Link href={`/chat/${props.id}`}>
								<S.message size={32} />
							</Link>
						</S.button>
						<S.button onClick={() => handleRemove(id, props.id)}>
							<S.removeFriend size={32} />
						</S.button>
					</S.buttonsContainer>
				</S.innerContainer>
			</S.container>
		</>
	);
};

export default Friend;
