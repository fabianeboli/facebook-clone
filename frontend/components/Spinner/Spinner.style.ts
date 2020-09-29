import styled from "styled-components";
import { Spinner5 } from "@styled-icons/icomoon/Spinner5";

export const backdrop = styled.div`
	background-color: #21215454;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 100000000000000;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
`;

export const spinner = styled(Spinner5)`
	color: ${(p) => p.theme.contrastPrimary};
	animation: spin 2s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
