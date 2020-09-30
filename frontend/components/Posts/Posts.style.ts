import styled from "styled-components";

export const buttonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const fetchMore = styled.button`
	font-size: calc(2em + 0.4vw);
	background-color: ${(p) => p.theme.foregroundSecondary};
	color: ${(p) => p.theme.darkBackground};
	border-radius: 80px;
	border: none;
	padding: 20px 200px;
	margin-bottom: 3%;
	cursor: pointer; 

	&:hover {
		background-color: ${(p) => p.theme.hoverBackground};
		color: ${p => p.theme.foregroundPrimary};
		transition: 0.4s;
	}
`;
