import styled from "styled-components";

export const form = styled.form`
	display: flex;
	justify-content: center;
	align-content: center;
	margin: 2% 0;
`;

export const newComment = styled.textarea`
	border-radius: 4px;
	background-color: ${(p) => p.theme.contrastSecondary};
`;

export const newCommentButton = styled.button`
	background-color: transparent;
	color: ${(p) => p.theme.foregroundPrimary};
	border: 3px solid ${(p) => p.theme.foregroundSecondary};
	border-radius: 4px;
	font-size: calc(1.4em + 0.2vw);
	font-weight: bold;
	cursor: pointer;
`;
