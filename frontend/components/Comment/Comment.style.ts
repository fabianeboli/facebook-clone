import * as S from "./../Posts/Post/Post.style";
import styled from "styled-components";

export const container = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid ${(p) => p.theme.contrastTertiary};
	background-color: transparent;
	border-radius: 8px;
	margin: 2%;
	padding: 5px;
`;

export const commentsInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	
`;

export const statusContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;

	& div {
		display: flex;
		align-items: center;
	}
`;

