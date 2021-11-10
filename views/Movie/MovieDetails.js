import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Divider,
  Spinner
} from "@chakra-ui/react";
import { useMovieDetailsContext } from "../../contexts/movieDetails";

export const MovieDetail = ({ onClickPoster }) => {
  const {
    movieDetails: {
      Actors: actors,
      Awards: awards,
      BoxOffice: boxOffice,
      Country: countryOrigin,
      Director: director,
      Genre: genre,
      Plot: plot,
      Poster: poster,
      Title: title,
      Year: year,
      Runtime: runtime,
      Writer: writters,
      imdbRating,
      imdbVotes
    },
    isLoading
  } = useMovieDetailsContext();
  return (
    <Flex
      w="100%"
      h="100%"
      mt="2.5em"
      flexDir="column"
      align="center"
      justify="center"
      data-cy="movie-details-container"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex w="100%">
          <Flex w="30%" justify="center">
            <Image
              src={poster}
              cursor="pointer"
              onClick={onClickPoster}
              data-cy="movie-details-image"
            />
          </Flex>
          <Box w="70%" px="1em">
            <Heading data-cy="movie-details-title">{title}</Heading>
            <Text data-cy="movie-details-year">{year}</Text>

            <Divider my="1em" />
            <Text data-cy="movie-details-plot">{plot}</Text>

            <Box my="1em">
              <Text data-cy="movie-details-starring">Starring: {actors}</Text>
              <Text data-cy="movie-details-director">Director: {director}</Text>
              <Text data-cy="movie-details-writer">Written By: {writters}</Text>
              <Text data-cy="movie-details-genre">Genre: {genre}</Text>
            </Box>

            <Box>
              <Text>Runtime: {runtime}</Text>
              <Text>Total Revenue: {boxOffice}</Text>

              <Text data-cy="movie-details-awards">Awards: {awards}</Text>
              <Text>
                {imdbRating} | Votes: {imdbVotes}
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
