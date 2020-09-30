import styled from "styled-components";

export const container = styled.div`
	display: flex;
	margin: 3% auto;
`;

export const form = styled.form`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	align-content: center;
	justify-content: center;
`;


export const textarea = styled.textarea`
	background-color: ${(p) => p.theme.contrastPrimary};
	color: ${(p) => p.theme.darkBackground};
	margin: 0 auto;
	font-size: calc(0.75em + 0.6vw);
	resize: none;
	border-radius: 8px 8px 0 0;
	outline: none;
	

`;

export const button = styled.button`
	margin: 0 auto;
	background-color: ${(p) => p.theme.contrastPrimary};
	height: 30%;
	width: 99.5%;
	border: none;
	font-size: calc(1.4em + 0.8vw);
	border-radius: 0 0 8px 8px;
	text-transform: uppercase;
	border-top: 2px solid ${(p) => p.theme.background};
	color: ${(p) => p.theme.background};
	cursor: pointer;

	&:hover {
		background-color: ${(p) => p.theme.contrastSecondary};
		transition: 1s;
	}
`;
