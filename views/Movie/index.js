import React from "react";
import { MovieDetailsContextProvider } from "../../contexts/movieDetails";
import { Box, Heading, Divider } from "@chakra-ui/react";
import { MovieDetail } from "./MovieDetails";

const MovieView = () => {
  return (
    <Box>
      <Heading>Movie Details</Heading>
      <Divider mt="1em" />
      <MovieDetail />
    </Box>
  );
};

export const MovieDetailsWrapper = ({ imdbId }) => (
  <MovieDetailsContextProvider imdbId={imdbId}>
    <MovieView />
  </MovieDetailsContextProvider>
);
