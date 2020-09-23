import styled from "styled-components";

export const container = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 2.5%;
`;

export const info = styled.h4`
	font-weight: 400;
	margin: 1% 2%;
`;

export const uploadFile = styled.input`
	background-color: ${(p) => p.theme.warning};
	color: ${(p) => p.theme.foregroundPrimary};
	border-radius: 12px;
	padding: 10px;

	& button {
		color: purple;
	}
`;

export const highlight = styled.span`
	font-weight: 700;
`;

export const friendAvatar = styled.img`
	max-width: 25%;
	max-height: 25%;
`;

export const profileContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 15px;
	background-color: ${(p) => p.theme.darkBackground};
	color: ${(p) => p.theme.foregroundPrimary};
`;

export const friendContainer = styled.div`
	background-color: ${(p) => p.theme.background};
	padding: 15px;
	border-radius: 15px;
`;
