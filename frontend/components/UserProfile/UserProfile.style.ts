import styled from "styled-components";

export const container = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 2.5%;
	font-size: calc(1em + 0.3vw);
	border-radius: 10px;
`;

export const infoDetails = styled.div`
	display: flex;
	padding: 0px;
	align-content: center;
	align-items: center;
	justify-content: space-evenly;

	& div {
		margin-left: 10px;
	}
`;

export const info = styled.h4`
	font-weight: 400;
	margin: auto;
	color: ${(p) => p.theme.foregroundSecondary};
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
	margin: 0;
	max-width: 75%;
	max-height: 75%;
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
	display: flex;
	background-color: ${(p) => p.theme.background};
	padding: 15px;
	border-radius: 15px;
	
`;
