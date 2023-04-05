import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "@/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </CartProvider>
  );
}
