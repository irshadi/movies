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
    searchMetadata,
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
  const hasError = searchMetadata && searchMetadata.Error;

  if (hasNotStartSearchYet || hasError) {
    return (
      <Flex w="100%" justify="center" my="2em" data-cy="empty-content">
        <EmptyContent
          title={
            hasError ? searchMetadata.Error : "You haven't search anything yet"
          }
          label={
            hasError
              ? "Please try antoher keyword"
              : "Start typing on searchbox to initiate search"
          }
          h="25em"
          w="25em"
          bg="gray.200"
        />
      </Flex>
    );
  }

  return (
    <Box
      height="30em"
      my="2em"
      overflowY="auto"
      onScroll={onScrollEnd}
      data-cy="search-container"
    >
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
