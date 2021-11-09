import React from "react";
import { Box, Text, Button, Heading, Divider } from "@chakra-ui/react";
import { SearchMovieContextProvider } from "../../contexts/searchMovie";
import { SearchBox } from "./Fragments/SearchBox";
import { SearchResult } from "./Fragments/SearchResult";

const HomepageView = () => {
  return (
    <Box>
      <Heading>Search Movie</Heading>

      <SearchBox />
      <Divider />
      <SearchResult />
    </Box>
  );
};

export const HomepageWrapper = () => (
  <SearchMovieContextProvider>
    <HomepageView />
  </SearchMovieContextProvider>
);
