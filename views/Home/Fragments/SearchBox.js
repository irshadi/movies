import React from "react";
import { Flex } from "@chakra-ui/react";
import { useSearchMovieContext } from "../../../contexts/searchMovie";
import { SearchInput } from "../../../components/Inputs";

export const SearchBox = () => {
  const { resetSearch, handleSearchMovie } = useSearchMovieContext();

  return (
    <Flex w="100%" my="1em">
      <SearchInput
        w="25em"
        onSearch={handleSearchMovie}
        onClear={resetSearch}
      />
    </Flex>
  );
};
