import styled from "styled-components";

export const container = styled.div`
	display: grid;
	justify-items: center;
	justify-self: stretch;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(auto-fit, 1fr);

	@media (min-width: ${p => p.theme.nonMobileScreen}) {
		grid-template-columns: repeat(3, 1fr) !important;
	}
`;

export const header = styled.h1`
	text-align: center;
`;

export const searchInput = styled.input`
	display: block;
	margin: 1% auto;
	background-color: ${(p) => p.theme.contrastPrimary};
	border: none;
	outline: none;
	border-radius: 4px;
	width: calc(15em + 2.6vw);
	height: 2em;
	color: ${(p) => p.theme.darkBackground};
`;
