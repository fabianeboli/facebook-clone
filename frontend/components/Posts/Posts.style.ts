import styled from "styled-components";

export const container = styled.div`
	display: flex;
`;

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
	
	&:hover {
		background-color: ${(p) => p.theme.hoverBackground};
		transition: 0.4s;
	}
`;
