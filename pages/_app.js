import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const config = { useSystemColorMode: false, initialColorMode: "light" };
const customTheme = extendTheme({ config });

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
