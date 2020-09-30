import styled from "styled-components";
import * as S from "../../Posts/Post/Post.style";
import { CommentMedical } from "@styled-icons/fa-solid/CommentMedical";
import { UserMinus } from "@styled-icons/fa-solid/UserMinus";

export const container = styled(S.userContainer)`
	justify-content: center;
	margin:1% 5%;
	align-content: baseline; 
	align-items: center;
`;

export const innerContainer = styled.div`
	margin: 0; 
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const avatar = S.avatar;

export const userDetails = styled(S.userDetails)`
	font-size: calc(1.1em + 0.4vw);

`;

export const buttonsContainer = styled.div`
	display: flex;
	align-items: center;
	align-content: space-between;
	justify-content: space-evenly;
`;

export const message = styled(CommentMedical)`
	color: ${(p) => p.theme.message};
	font-size: calc(1.5em + 0.6vw);
`;

export const removeFriend = styled(UserMinus)`
	color: ${(p) => p.theme.error};
	font-size: calc(1.5em + 0.6vw);
`;

export const button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: calc(1.5em + 0.6vw);
`;
