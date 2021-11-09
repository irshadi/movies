import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useSearchMovieContext } from "../../../contexts/searchMovie";

export const SearchMetadata = () => {
  const { searchResult, searchMetadata, page } = useSearchMovieContext();
  const hasSearchResult = searchResult.length;

  if (!hasSearchResult) {
    return null;
  }
  const totalPage = Math.ceil(searchMetadata.totalResults / 10);

  return (
    <Flex align="center" mt="1em">
      <Text>
        Page: {page} out of {totalPage}. {searchMetadata.totalResults} result(s)
        found.
      </Text>
    </Flex>
  );
};
