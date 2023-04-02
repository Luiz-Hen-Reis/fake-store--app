import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        box-sizing: border-box;
        background-color: ${theme.colors.champagne};
        padding: 0 ${theme.spacings.small};
    }
    html {
        font-size: 62.50%;
        scroll-behavior: smooth;
        line-height: 1.7;
        font-family: ${theme.font.family.default};
        color: ${theme.colors.gray};
    }
`;
