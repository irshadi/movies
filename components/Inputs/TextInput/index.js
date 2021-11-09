import React from "react";
import Input from "../Input";
import { Text, Box } from "@chakra-ui/react";

const TextInput = ({ label, error = true, ...props }) => {
  const hasError = Boolean(error);
  return (
    <Box w="100%">
      <Text
        pb=".25em"
        color="system.light-grey"
        fontWeight="600"
        fontSize=".85em"
      >
        {label}
      </Text>
      <Input {...props} />
      {hasError && (
        <Text ml=".5em" mt=".5em" fontSize=".7em" color="pokemon.red.500">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default TextInput;
