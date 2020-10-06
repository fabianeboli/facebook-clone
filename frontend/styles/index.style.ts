import styled from "styled-components";

export const page = styled.div`
	overflow: hidden;
`;

export const container = styled.div`
	display: flex;
	z-index: 100000000000;
	flex-direction: column;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		flex-direction: row;
	}
`;

export const SignIn = styled.div`
	margin: 5% 2%;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		display: block;
		position: relative;
		top: 20vh;
		left: 1vw;
		z-index: 10000;
		margin: 0;
	}
`;

export const signUp = styled.div`
	margin: 5% 2%;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		display: block;
		position: relative;
		left: 5vw;
		top: 5vh;
		z-index: 1000000;
		margin: 0;
	}
`;

export const rectangle = styled.img`
	display: none;
	position: fixed;
	z-index: 1000;
	width: 120vw;
	height: 110vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100% 100%, auto;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		display: block;
	}
`;

export const girlLamp = styled.img`
	display: none;
	position: absolute;
	bottom: 0px;
	right: 0px;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		display: block;
	}
`;

export const girlTablet = styled.img`
	display: block;
	position: fixed;
	left: -40px;
	top: 10vh;

	@media (min-width: ${(p) => p.theme.nonMobileScreen}) {
		display: block;
		position: absolute;
		left: -40px;
		top: auto;
	}
`;
