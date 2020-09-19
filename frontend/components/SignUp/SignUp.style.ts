import { theme } from "./../../theme.style";
import styled from "styled-components";

export const outerContainer = styled.div`
	border: 2px solid ${(p) => p.theme.contrastPrimary};
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: center;
	align-items: stretch;
	text-align: center;
`;

export const header = styled.h1`
	text-transform: uppercase;
	font-size: calc(1.2em + 0.8vw);
	margin: 0;
`;

export const inputGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, 1fr);
	justify-items: center;
	align-content: center;
`;

export const submit = styled.button`
	border: none;
	background-color: ${(p) => p.theme.contrastPrimary};
	color: ${(p) => p.theme.darkBackground};
	font-size: 2em;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: ${(p) => p.theme.contrastSecondary};
		transition: 1s;
	}
`;

export const group = styled.div``;

export const input = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 2px solid ${(p) => p.theme.foregroundPrimary};
	color: ${(p) => p.theme.foregroundPrimary};
	margin: 2.5%;
	font-size: calc(0.7em + 0.7vw);

	&:hover,
	&:focus {
		border: transparent;
		border-bottom: 2px solid ${(p) => p.theme.contrastPrimary};
		transition: 0.7s;
		outline: none;
	}
`;
