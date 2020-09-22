import styled from "styled-components";
import { SearchPlus } from "@styled-icons/fa-solid/SearchPlus";
import { UserPlus } from "@styled-icons/fa-solid/UserPlus";

export const container = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	align-items: center;
	background-color: ${(p) => p.theme.darkBackground};
	margin: 2%;
	border-radius: 8px;
	padding: 25px;
	flex: 50%;
	width: calc(12rem + 2vw);
`;

export const buttonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 2%;
`;

export const button = styled.button`
	background-color: ${(p) => p.theme.background};
	color: ${(p) => p.theme.hoverBackground};
	border: none;
	border-radius: 80px;
	padding: 10px;
	margin: 0 5%;
	cursor: pointer;

	&:hover {
		background-color: ${(p) => p.theme.background + "CC"};
	}
`;

export const showProfile = styled(SearchPlus)`
	color: ${(p) => p.theme.message};
`;

export const friendRequest = styled(UserPlus)`
	color: ${(p) => p.theme.confirm};
`;

export const avatar = styled.img`
	width: calc(3em + 0.6vw);
	height: calc(3em + 0.6vw);
`;
