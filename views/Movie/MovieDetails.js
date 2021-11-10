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
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex w="100%">
          <Flex w="30%" justify="center">
            <Image src={poster} cursor="pointer" onClick={onClickPoster} />
          </Flex>
          <Box w="70%" px="1em">
            <Heading>{title}</Heading>
            <Text>{year}</Text>

            <Divider my="1em" />
            <Text>{plot}</Text>

            <Box my="1em">
              <Text>Starring: {actors}</Text>
              <Text>Director: {director}</Text>
              <Text>Written By: {writters}</Text>
              <Text>Genre: {genre}</Text>
            </Box>

            <Box>
              <Text>Runtime: {runtime}</Text>
              <Text>Total Revenue: {boxOffice}</Text>

              <Text>Awards: {awards}</Text>
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
