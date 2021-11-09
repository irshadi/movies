import React from "react";

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";

export const Modal = ({ onClose, isOpen, title, children, ...props }) => {
  return (
    <ChakraModal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      {...props}
    >
      <ModalOverlay />
      <ModalContent w={["92.5%"]} data-cy={props["data-cy"] || "modal"}>
        <ModalHeader textTransform="capitalize">{title}</ModalHeader>
        <ModalCloseButton rounded="full" color="system.grey" />
        {children}
      </ModalContent>
    </ChakraModal>
  );
};
