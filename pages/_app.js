import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ColorModeScript initialColorMode="light" />
    </ChakraProvider>
  );
}

export default MyApp;
