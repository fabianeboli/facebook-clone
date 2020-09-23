import styled from "styled-components";
import {
	friendContainer,
	friendAvatar,
	info,
} from "../UserProfile/UserProfile.style";
import { UserCheck, UserTimes } from "@styled-icons/fa-solid/";

export const container = friendContainer;

export const requestAvatar = friendAvatar;

export const requestInfo = info;

export const button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const acceptFriendRequest = styled(UserCheck)`
	color: ${(p) => p.theme.confirm};
`;

export const rejectFriendRequest = styled(UserTimes)`
	color: ${(p) => p.theme.error};
`;
