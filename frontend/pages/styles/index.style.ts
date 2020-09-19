import styled from "styled-components";

export const header = styled.h1`
	font-size: calc(1.5em + 0.9vw);
	font-family: "Fredoka One";
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	z-index: -10000;
`;


export const container = styled.div`
	display: flex;
	z-index: 100000000000;
`;

export const SignIn = styled.div`
	position: relative;
	top: 20vh;
	left: 1vw;
	z-index: 10000;
`;

export const signUp = styled.div`
	position: relative;
	left: 5vw;
	top: 5vh;
	z-index: 1000000;
`;

export const rectangle = styled.img`
	position: fixed;
	z-index: 1000;
	width: 120vw;
	height: 110vh;
	background-position: center center; 
	background-repeat: no-repeat;
	background-size: 100% 100%, auto;
	
`;

export const girlLamp = styled.img`
	position: absolute;
	bottom: 0px;
	right: 0px;
`;

export const girlTablet = styled.img`
	position: absolute;
	left: -40px;
`;


