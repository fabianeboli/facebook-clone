import styled from "styled-components";

export const messageContainer = styled.div<{ isLoggedUser: boolean }>`
	background-color: ${(p) =>
		p.isLoggedUser ? p.theme.confirmDisabled : p.theme.hoverBackground};
	border-radius: ${(p) =>
		p.isLoggedUser ? "20px 2px 8px 8px" : "2px 8px 20px 8px"};
	padding: 20px;
	margin: 0.5% 0;
	margin-right: ${p => p.isLoggedUser ? "-20%" : "20%"}
`;
