import Link from "next/link";
import styled from "styled-components";

export const container = styled.div`
	display: flex;
	text-align: center;
	justify-content: space-around;
	font-weight: bold;
	font-size: calc(1em + 0.9vw);
	padding: 5px;
	background-color: ${(p) => p.theme.contrastPrimary};
	color: ${(p) => p.theme.darkBackground};

	& a:hover {
		color: ${(p) => p.theme.hoverBackground};
		transition: 0.3s;
	}

	& button {
		background-color: transparent;
		border: none;
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
	}
`;
