import styled from "styled-components";
import { ArrowRight } from "@styled-icons/fa-solid/ArrowRight";
import { ArrowLeft } from "@styled-icons/fa-solid/ArrowLeft";

export const container = styled.div<{ active: boolean }>`
	visibility: ${(props) => (props.active ? "visible" : "hidden")};
	transform: ${(props) =>
		props.active ? "translateX(0%)" : "translateX(100%)"};
	transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
	position: fixed;
	top: 0em;
	right: 0px;
	width: 75%;
	height: 100vh;
	background-color: ${(p) => p.theme.darkBackground};
	color: ${(p) => p.theme.foregroundPrimary};
	z-index: 1000000000000000;
	padding: 0.5rem;
	text-align: center;
	overflow-y: auto;
	touch-action: pan-y;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		position: sticky;
		top: 0em;
		width: 15% ;
		right: 0px;
	}
`;

export const title = styled.p`
	font-weight: bold;
	font-size: calc(1.2em + 0.4vw);
	padding: 0 10px;
`;

export const closeButtonContainer = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
`;

export const openButton = styled.button<{ active: boolean }>`
	visibility: ${(props) => (props.active ? "visible" : "hidden")};
	border: none;
	position: fixed;
	padding: 15px;
	top: 10em;
	right: 15px;
	background-color: ${(p) => p.theme.darkBackground};
	color: ${(p) => p.theme.hoverBackground};
	border-radius: 80px;
	cursor: pointer;
`;

export const closeButton = styled.button<{ active: boolean }>`
	border: none;
	padding: 15px;
	background-color: ${(p) => p.theme.background};
	color: ${(p) => p.theme.hoverBackground};
	border-radius: 80px;
	cursor: pointer;
`;

export const arrowRight = styled(ArrowRight)``;
export const arrowLeft = styled(ArrowLeft)``;
