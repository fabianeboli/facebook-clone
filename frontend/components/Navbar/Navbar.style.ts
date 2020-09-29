import styled from "styled-components";

export const header = styled.h1`
	font-size: calc(1.5em + 0.9vw);
	font-family: "Passion One";
	letter-spacing: 6px;
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	margin-left: 0;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		text-align: left;
		margin-left: 1rem;

	}
`;

export const container = styled.div`
	margin: 0;
	display: flex;
	text-align: center;
	justify-content: space-around;
	font-weight: bold;
	font-size: calc(1em + 0.9vw);
	padding: 5px 5px;
	background-color: ${(p) => p.theme.contrastPrimary};
	color: ${(p) => p.theme.darkBackground};

	& button {
		background-color: transparent;
		border: none;
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		margin: 0;
		padding: 0;
		padding-top: 1px;
	}
`;

export const a = styled.a`
	color: ${(p) => p.theme.darkBackground};
	text-decoration: none;

	&:hover {
		color: ${(p) => p.theme.hoverBackground};
		transition: 0.3s;
		cursor: pointer;
	}
`;
