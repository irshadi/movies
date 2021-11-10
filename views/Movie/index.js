import React from "react";
import { MovieDetailsContextProvider } from "../../contexts/movieDetails";
import { Box, Heading, Divider, useDisclosure } from "@chakra-ui/react";
import { MovieDetail } from "./MovieDetails";
import { MoviePosterModal } from "./MoviePosterModal";

const MovieView = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Box>
      <Heading>Movie Details</Heading>
      <Divider mt="1em" />
      <MovieDetail onClickPoster={onToggle} />
      <MoviePosterModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export const MovieDetailsWrapper = ({ imdbId }) => (
  <MovieDetailsContextProvider imdbId={imdbId}>
    <MovieView />
  </MovieDetailsContextProvider>
);
