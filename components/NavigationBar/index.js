import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export const NavigationBar = ({ ...props }) => {
  const { push } = useRouter();
  return (
    <Box w="100%" bg="gray.500" p="1em" {...props}>
      <Flex w="50%" align="center">
        <Heading cursor="pointer" onClick={() => push("/")}>
          Movies
        </Heading>
      </Flex>
      <Flex w="50%" align="center"></Flex>
    </Box>
  );
};
