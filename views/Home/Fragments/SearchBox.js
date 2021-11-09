import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSearchMovieContext } from "../../../contexts/searchMovie";
import { SearchInput } from "../../../components/Inputs";

export const SearchBox = () => {
  const { setSearchValue, searchType, handleSearchMovie, resetSearch } =
    useSearchMovieContext();
  return (
    <Flex w="100%" my="1em">
      <SearchInput
        w="25em"
        onSearch={value => handleSearchMovie(value)}
        onClear={resetSearch}
      />
    </Flex>
  );
};
