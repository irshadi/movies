import React from "react";
import { Box } from "@chakra-ui/react";

export const MovieView = ({ ...props }) => {
  return <Box>Movie {JSON.stringify(props)}</Box>;
};
