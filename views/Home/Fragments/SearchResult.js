import React from "react";
import { useSearchMovieContext } from "../../../contexts/searchMovie";
import { Box } from "@chakra-ui/react";
import { isEmpty } from "../../../helper";

export const SearchResult = () => {
  const { searchValue, searchResult } = useSearchMovieContext();
  const ref = React.useRef();

  const hasNotStartSearchYet = !searchValue && isEmpty(searchResult);
  // const isSearchResultEmpty = ;

  return (
    <Box mt="2em" ref={ref}>
      {JSON.stringify(searchResult)}
    </Box>
  );
};
