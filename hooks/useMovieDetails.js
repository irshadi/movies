import React from "react";
import { useRequest } from "./useRequest";

export const useMovieDetails = id => {
  const [movieDetails, setMovieDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const { URL, get } = useRequest();

  const getMovieDetails = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await get(`${URL}i=${id}`);
      console.log(result);
      setMovieDetails(result);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [setMovieDetails, setIsLoading]);

  React.useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return {
    movieDetails,
    isLoading
  };
};
