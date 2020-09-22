import { DefaultTheme } from "styled-components";
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		background: string;
		darkBackground: string;
		foregroundPrimary: string;
		foregroundSecondary: string;
		foregroundTertiary: string;
		hoverBackground: string;
		contrastPrimary: string;
		contrastSecondary: string;
		contrastTertiary: string;
		highlight: string;
		comment: string;
		confirm: string;
		confirmDisabled: string;
		message: string;
		warning: string;
		error: string;
		nonMobileScreen: string;
	}
}
