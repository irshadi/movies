import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
import { SearchMovieContextProvider } from "../contexts/searchMovie";

const HomepageView = () => {
  return (
    <Box>
      <Heading>Search Movie</Heading>
    </Box>
  );
};

export const HomepageWrapper = () => (
  <SearchMovieContextProvider>
    <HomepageView />
  </SearchMovieContextProvider>
);
