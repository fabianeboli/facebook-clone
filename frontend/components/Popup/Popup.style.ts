import styled from "styled-components";

export const text = styled.div`
	position: absolute;
	background-color: ${(p) => p.theme.darkBackground};
	border-radius: 12px;
	color: ${(p) => p.theme.foregroundPrimary};
	opacity: 0;
	padding: 10px;

	&:hover {
		opacity: 1;
	}
`;
