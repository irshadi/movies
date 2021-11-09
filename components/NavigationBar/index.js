import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

export const NavigationBar = ({ ...props }) => {
  return (
    <Box w="100%" bg="gray.500" p="1em" {...props}>
      <Flex w="50%" align="center">
        <Heading>Movies</Heading>
      </Flex>
      <Flex w="50%" align="center"></Flex>
    </Box>
  );
};
