import React from "react";
import { useSearchMovie } from "../hooks/useSearchMovie";

const SearchMovieContext = React.createContext({});

export const SearchMovieContextProvider = ({ children }) => {
  const value = useSearchMovie();

  return (
    <SearchMovieContext.Provider value={value}>
      {children}
    </SearchMovieContext.Provider>
  );
};

export const useSearchMovieContext = () => {
  return React.useContext(SearchMovieContext);
};
