import { theme } from "@/themes/default-theme";
import { GlobalStyle } from "@/themes/styles";
import { ThemeProvider as StyledThemeProvider } from "@xstyled/styled-components";
import type { PropsWithChildren } from "react";

export type Theme = typeof theme;

const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<StyledThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</StyledThemeProvider>
	);
};

export default ThemeProvider;
