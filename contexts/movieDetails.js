import React from "react";
import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieDetailsContext = React.createContext({});

export const MovieDetailsContextProvider = ({ children, imdbId }) => {
  const value = useMovieDetails(imdbId);

  return (
    <MovieDetailsContext.Provider value={value}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

export const useMovieDetailsContext = () => {
  return React.useContext(MovieDetailsContext);
};
