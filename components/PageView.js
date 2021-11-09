import React from "react";
import { Box } from "@chakra-ui/react";

export const PageView = ({ children }) => {
  return (
    <Box h="100vh" w="100%" overflow="hidden">
      <Box>{children}</Box>
    </Box>
  );
};
