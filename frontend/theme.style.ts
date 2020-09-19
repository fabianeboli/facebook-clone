import { createGlobalStyle, DefaultTheme } from "styled-components";

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
};

export const GlobalStyle = createGlobalStyle`
	@font-face {
    font-family: 'Fredoka One';
    src: local('Fredoka One'), local('FredokaOne-Regular'),
        url('/fonts/FredokaOne-Regular.woff2') format('woff2'),
        url('/fonts/FredokaOne-Regular.woff') format('woff'),
        url('/fonts/FredokaOne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans'), local('NotoSans'),
        url('/fonts/NotoSans.woff2') format('woff2'),
        url('/fonts/NotoSans.woff') format('woff'),
        url('/fonts/NotoSans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans Bold'), local('NotoSans-Bold'),
        url('/fonts/NotoSans-Bold.woff2') format('woff2'),
        url('/fonts/NotoSans-Bold.woff') format('woff'),
        url('/fonts/NotoSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

	html, body {
	
		background-color: ${(p) => p.theme.background};
		color: ${(p) => p.theme.foregroundPrimary};
		font-family: 'Noto sans', sans-serif;
		background-attachment: fixed;
		scroll-behavior: smooth;
	}


`;
