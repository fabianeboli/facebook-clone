import styled from "styled-components";
import { PaperPlane } from "@styled-icons/fa-solid";

export const container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const sendContainer = styled.div`
	display: flex;
`;

export const title = styled.h1`
	text-align: center;
	font-weight: bold;
`;

// 
export const messageInput = styled.textarea`
	background-color: ${(p) => p.theme.darkBackground};
	border-radius: 18px;
	border: none;
	height: calc(6em + 0.4vw);
	width: calc(40em + 4vw);
	padding: 15px;
	margin: 1% 0%;
	color: ${(p) => p.theme.foregroundPrimary};
	resize: none;
	outline: none;
`;

export const sendIcon = styled(PaperPlane)``;

export const sendButton = styled.button`
	background-color: ${(p) => p.theme.darkBackground};
	color: ${(p) => p.theme.hoverBackground};
	border-radius: 80px;
	width: 15%;
	border: none;
	cursor: pointer;

	margin-left: 1%;

	&:hover {
		background-color: ${p => p.theme.darkBackground + "CC"}
	}
	
`;
