import React from "react";

const SEARCH_MOVIE_ACTION = {
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
  SET_PAGE: "SET_PAGE",
  SET_SEARCH_TYPE: "SET_SEARCH_TYPE"
};

export const IMDB_TYPE = {
  MOVIE: "movie",
  SERIES: "series",
  EPISODE: "episode"
};

const searchMovieReducer = (state, { type, ...action }) => {
  switch (type) {
    case SEARCH_MOVIE_ACTION.SET_SEARCH_VALUE:
      const { searchValue } = action;
      return {
        ...state,
        searchValue
      };

    case SEARCH_MOVIE_ACTION.SET_PAGE:
      const { page } = action;
      return {
        ...state,
        page
      };

    default:
      throw new Error(`useSearchMovie - TypeError: ${type}`);
  }
};

export const useSearchMovie = () => {
  const [{ page, searchValue, searchType }, dispatch] = React.useReducer(
    searchMovieReducer,
    {
      page: 0,
      searchValue: "",
      searchType: null
    }
  );

  const setSearchValue = searchValue =>
    dispatch({ type: SEARCH_MOVIE_ACTION.SET_SEARCH_VALUE, searchValue });

  const setPage = page =>
    dispatch({ type: SEARCH_MOVIE_ACTION.SET_PAGE, page });

  const setSearchType = searchType =>
    dispatch({ type: SEARCH_MOVIE_ACTION.SET_SEARCH_TYPE, searchType });

  return {
    searchValue,
    setSearchValue,
    page,
    setPage,
    searchType,
    setSearchType
  };
};
