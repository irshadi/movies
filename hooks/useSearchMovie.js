import React from "react";
import { useRequest } from "./useRequest";

const SEARCH_MOVIE_ACTION = {
  SET_PAGE: "SET_PAGE",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",

  SET_IS_LOADING: "SET_IS_LOADING",
  SET_SEARCH_RESULT: "SET_SEARCH_RESULT",
  SET_SEARCH_METADATA: "SET_SEARCH_METADATA",

  RESET_SEARCH: "RESET_SEARCH"
};

const searchMovieReducer = (state, { type, ...action }) => {
  switch (type) {
    case SEARCH_MOVIE_ACTION.SET_PAGE:
      const { page } = action;
      return {
        ...state,
        page
      };

    case SEARCH_MOVIE_ACTION.SET_SEARCH_VALUE:
      const { searchValue } = action;
      return {
        ...state,
        searchValue
      };

    case SEARCH_MOVIE_ACTION.SET_SEARCH_RESULT:
      const { searchResult } = action;
      console.log(searchResult, state);
      return {
        ...state,
        searchResult
      };

    case SEARCH_MOVIE_ACTION.SET_SEARCH_METADATA:
      const { searchMetadata } = action;
      return {
        ...state,
        searchMetadata
      };

    case SEARCH_MOVIE_ACTION.SET_IS_LOADING:
      const { isLoading } = action;
      return {
        ...state,
        isLoading
      };

    case SEARCH_MOVIE_ACTION.RESET_SEARCH:
      return {
        ...state,
        searchValue: "",
        page: 1,
        searchResult: [],
        searchMetadata: {}
      };

    default:
      throw new Error(`useSearchMovie - TypeError: ${type}`);
  }
};

export const useSearchMovie = () => {
  const { get, URL } = useRequest();
  const [
    { page, searchValue, searchResult = [], isLoading, searchMetadata = {} },
    dispatch
  ] = React.useReducer(searchMovieReducer, {
    page: 1,
    isLoading: false,

    searchValue: "",
    searchResult: [],
    searchMetadata: {}
  });

  const setPage = page =>
    dispatch({ type: SEARCH_MOVIE_ACTION.SET_PAGE, page });

  const setIsLoading = React.useCallback(
    isLoading =>
      dispatch({ type: SEARCH_MOVIE_ACTION.SET_IS_LOADING, isLoading }),
    [dispatch]
  );

  const setSearchResult = React.useCallback(
    searchResult =>
      dispatch({ type: SEARCH_MOVIE_ACTION.SET_SEARCH_RESULT, searchResult }),
    [dispatch]
  );

  const setSearchMetadata = React.useCallback(
    searchMetadata =>
      dispatch({
        type: SEARCH_MOVIE_ACTION.SET_SEARCH_METADATA,
        searchMetadata
      }),
    [dispatch]
  );

  const setSearchValue = React.useCallback(
    searchValue =>
      dispatch({ type: SEARCH_MOVIE_ACTION.SET_SEARCH_VALUE, searchValue }),
    [dispatch]
  );

  const resetSearch = React.useCallback(() => {
    dispatch({ type: SEARCH_MOVIE_ACTION.RESET_SEARCH });
  }, [dispatch]);

  const handleSearchMovie = async title => {
    setIsLoading(true);
    setSearchValue(title);
    try {
      const { Search: result = [], ...metadata } = await get(
        `${URL}s=${title}&page=${page}`
      );
      setSearchResult(result);
      setSearchMetadata(metadata);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = async () => {
    const currentPage = (page += 1);
    setPage(currentPage);
    setIsLoading(true);
    try {
      const { Search: result = [], ...metadata } = await get(
        `${URL}s=${searchValue}&page=${currentPage}`
      );
      const copySearchResult = [...searchResult, ...result];

      setSearchResult(copySearchResult);
      setSearchMetadata(metadata);
    } catch (error) {
      setPage((currentPage -= 1));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    page,
    setPage,

    handleSearchMovie,
    handleNextPage,
    isLoading,

    resetSearch,

    searchResult,
    setSearchResult,

    searchValue,
    setSearchValue,

    searchMetadata
  };
};
