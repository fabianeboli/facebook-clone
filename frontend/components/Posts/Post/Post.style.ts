import styled from "styled-components";
import { TimesCircle } from "@styled-icons/fa-solid/";
import { Like } from "@styled-icons/boxicons-solid/";
import { Comments } from "@styled-icons/fa-solid/";

export const container = styled.div`
	max-width: 700px;
	padding: 10px 15px;
	margin: 2% auto;
	border-radius: 8px;
	background-color: ${(p) => p.theme.darkBackground};
`;

export const userContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;
	align-items: center;
`;

export const avatar = styled.img`
	width: calc(3em + 0.6vw);
	height: calc(3em + 0.6vw);
	border-radius: 4px;
	margin-right: 1.5%;
`;

export const userDetails = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 100%;
`;

export const username = styled.div`
	font-size: calc(1.1em + 0.4vw);
	font-weight: bold;
	color: ${(p) => p.theme.foregroundPrimary};
`;

export const date = styled.div`
	font-size: calc(0.5em + 0.4vw);
	color: ${(p) => p.theme.foregroundTertiary};
`;

export const deleteButton = styled.button`
	background-color: transparent;
	border: none;
	margin: 0;
	padding: 0;
`;

export const deletePost = styled(TimesCircle)`
	color: ${(p) => p.theme.error};
	cursor: pointer;
`;

export const like = styled(Like)`
	color: ${(p) => p.theme.foregroundTertiary};
`;

export const comments = styled(Comments)`
	color: ${(p) => p.theme.foregroundTertiary};
`;

export const statusContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;

	& div {
		display: flex;
	}
`;

export const content = styled.p`
	margin-left: 1%;
`;

export const optionsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	border-top: 2px solid ${(p) => p.theme.foregroundSecondary};
	border-bottom: 2px solid ${(p) => p.theme.foregroundSecondary};
	padding: 10px 0px;
`;

export const optionButton = styled.button`
	display: flex;
	align-items: center;
	align-content: center;
	background-color: transparent;
	border: none;
	font-size: calc(1.2em + 0.7vw);
	color: ${(p) => p.theme.foregroundPrimary};
	cursor: pointer;
	padding: 0 2.5%;
	&:not(:last-of-type) {
		border-right: 2px solid ${(p) => p.theme.foregroundSecondary};
	}
`;

export const optionLike = styled(Like)`
	color: ${(p) => p.theme.foregroundPrimary};
	margin-right: 0.25em;
`;

export const commentLike = styled(Comments)`
	color: ${(p) => p.theme.foregroundPrimary};
	margin-right: 0.25em;
`;
