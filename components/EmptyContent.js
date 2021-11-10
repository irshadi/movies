import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { IoIosHelpCircle } from "react-icons/io";

export const EmptyContent = ({
  title,
  label,
  icon = IoIosHelpCircle,
  iconColor,
  ...props
}) => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      flexDir="column"
      opacity="0.3"
      borderRadius=".25em"
      boxShadow="lg"
      {...props}
    >
      <Icon
        as={IoIosHelpCircle}
        color={iconColor || "gray.700"}
        fontSize="5em"
        mb={[".5em"]}
      />
      <Text fontSize="lg" fontWeight="600">
        {title}
      </Text>
      <Text fontWeight="500" mt="1em">
        {label}
      </Text>
    </Flex>
  );
};
