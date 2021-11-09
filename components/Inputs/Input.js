import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

const Input = ({ value, onChange, isInvalid, ...props }) => {
  return (
    <ChakraInput
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      {...props}
    />
  );
};

export default Input;
