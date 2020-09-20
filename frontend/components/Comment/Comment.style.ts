import * as S from "./../Posts/Post/Post.style";
import styled from "styled-components";

export const container = styled.div`
	display: flex;
	border: 2px solid ${(p) => p.theme.contrastTertiary};
	background-color: transparent;
	border-radius: 8px;
	margin: 1%;
`;

export const userDetails = S.userDetails;

export const username = S.username;

export const date = S.date;

export const content = S.content;
