import React from "react";
import { Modal } from "../../components/Modal";
import { ModalBody, Image } from "@chakra-ui/react";
import { useMovieDetailsContext } from "../../contexts/movieDetails";

export const MoviePosterModal = ({ ...props }) => {
  const { movieDetails = {} } = useMovieDetailsContext();
  const { Poster: poster } = movieDetails;

  return (
    <Modal {...props} data-cy="poster-modal">
      <ModalBody>
        <Image src={poster} h="75vh" />
      </ModalBody>
    </Modal>
  );
};
