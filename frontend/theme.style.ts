import {
	createGlobalStyle,
	DefaultTheme,
} from "styled-components";

// taken from shades of purple. https://github.com/ahmadawais/shades-of-purple-vscode
export const theme: DefaultTheme = {
	background: "#2D2B55",
	darkBackground: "#1E1E3F",
	foregroundPrimary: "#FAFAFF",
	foregroundSecondary: "#A599E9",
	foregroundTertiary: "#9D9BA9",
	hoverBackground: "#4D21FC",
	contrastPrimary: "#FAD000",
	contrastSecondary: "#FFEE80",
	contrastTertiary: "#FAEFA5",
	highlight: "#FF7200",
	comment: "#B362FF",
	confirm: "#41EF01",
	confirmDisabled: "#299801",
	message: "#4C9FFF",
	warning: "#FF9D00",
	error: "#EC3A37",
	nonMobileScreen: "768px",
};

export const GlobalStyle = createGlobalStyle`
	html, body {
		width: 100%;
		height: 100%;
		background-color: ${(p) => p.theme.background};
		color: ${(p) => p.theme.foregroundPrimary};
		font-family: 'Noto sans', sans-serif;
		background-attachment: fixed;
		scroll-behavior: smooth;
	}


`;
