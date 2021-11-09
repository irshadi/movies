import React from "react";
import { Box } from "@chakra-ui/react";
import { NavigationBar } from "./NavigationBar";

export const PageView = ({ children }) => {
  return (
    <Box h="100vh" w="100%" overflow="hidden">
      <NavigationBar h="5em" />
      <Box h="calc(100vh - 5em)" p="1em">
        {children}
      </Box>
    </Box>
  );
};
