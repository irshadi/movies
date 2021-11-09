import React from "react";
import { useSearchMovieContext } from "../../../contexts/searchMovie";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useRectMeasure } from "../../../hooks/useRectMeasure";
import { EmptyContent } from "../../../components/EmptyContent";
import { SearchResultCard } from "./SearchResultCard";

export const SearchResult = () => {
  const { searchValue, searchResult } = useSearchMovieContext();
  const { ref, rect } = useRectMeasure();

  const hasNotStartSearchYet = !searchValue && !searchResult.length;
  // const isSearchResultEmpty = ;

  if (hasNotStartSearchYet) {
    return (
      <Flex w="100%" justify="center" mt="2em">
        <EmptyContent
          title="You haven't search anything yet"
          label="Start typing on searchbox to initiate search"
          h="25em"
          w="25em"
        />
      </Flex>
    );
  }

  return (
    <Box height="30em" mt="2em" ref={ref} overflowY="auto">
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        {searchResult.map(
          ({
            Poster: poster,
            Year: year,
            imdbID: imdbId,
            Type: type,
            Title: title
          }) => (
            <SearchResultCard
              key={imdbId}
              imdbId={imdbId}
              poster={poster}
              year={year}
              type={type}
              title={title}
            />
          )
        )}
      </Grid>
    </Box>
  );
};
