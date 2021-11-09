import React from "react";
import { Box, Text, Flex, Heading, Image } from "@chakra-ui/react";

export const SearchResultCard = ({ title, year, imdbId, poster, type }) => {
  return (
    <Flex
      w="75%"
      h="10em"
      border="solid 1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={poster} />
      <Box p="2em" w="100%">
        <Heading fontSize="2xl" isTruncated>
          {title}
        </Heading>
        <Text>{year}</Text>
        <Flex
          mt="1em"
          w="5em"
          align="center"
          justify="center"
          rounded="full"
          px="1em"
          py=".25em"
          bg="gray.700"
        >
          <Text fontWeight="black" textTransform="capitalize">
            {type}
          </Text>
        </Flex>
      </Box>

      <Text fontSize="sm" pos="relative" top={2} right={3}>
        #{imdbId}
      </Text>
    </Flex>
  );
};
