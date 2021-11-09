import React from "react";
import { MovieView } from "../../views/Movie";
import { PageWrapper } from "../../components/PageWrapper";

const MovieDetails = () => <PageWrapper page={MovieView} needQuery />;

export default MovieDetails;
