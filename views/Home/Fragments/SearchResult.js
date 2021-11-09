import React from "react";
import { useSearchMovieContext } from "../../../contexts/searchMovie";
import { Box, Flex } from "@chakra-ui/react";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { EmptyContent } from "../../../components/EmptyContent";
import { SearchResultCard } from "./SearchResultCard";

export const SearchResult = () => {
  const {
    searchValue,
    searchResult = [],
    handleNextPage,
    page,
    isLoading
  } = useSearchMovieContext();
  const { onScrollEnd } = useInfiniteScroll({
    threshold: 90,
    handleReachBottom: () => {
      if (isLoading) {
        return;
      }
      handleNextPage();
    }
  });

  const data = isLoading
    ? [
        ...searchResult,
        ...Array.from({ length: 10 }, () => ({ isLoading: true }))
      ]
    : searchResult;

  const hasNotStartSearchYet = !searchValue && !searchResult.length;

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
    <Box height="30em" mt="2em" overflowY="auto" onScroll={onScrollEnd}>
      {data.map(
        (
          {
            Poster: poster,
            Year: year,
            imdbID: imdbId,
            Type: type,
            Title: title,
            isLoading = false
          },
          index
        ) => (
          <SearchResultCard
            index={index}
            isLoading={isLoading}
            key={`${index}-${imdbId}`}
            imdbId={imdbId}
            poster={poster}
            year={year}
            type={type}
            title={title}
          />
        )
      )}
    </Box>
  );
};
