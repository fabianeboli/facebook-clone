import styled from "styled-components";

export const container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	margin: 2.5%;
	font-size: calc(1em + 0.3vw);

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		flex-direction: row !important;
		align-items: flex-start !important;
	}
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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

export const userAvatar = styled.img`
	margin: 0;
	width: calc(3.5em + 0.6vw);
	height: calc(3.5em + 0.6vw);
	border-radius: 4px;
	/* margin-right: 1.5%; */
`;

export const friendAvatar = styled.img`
	margin: 0;
	max-width: 75%;
	max-height: 75%;
`;

export const profileContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-content: flex-start;
	flex: 20% 50% auto;
	position: relative;
	padding: 15px;
	border-radius: 8px;
	background-color: ${(p) => p.theme.darkBackground};
	color: ${(p) => p.theme.foregroundPrimary};
`;

export const friendContainer = styled.div`
	display: flex;
	background-color: ${(p) => p.theme.background};
	padding: 15px;
	border-radius: 15px;
`;
