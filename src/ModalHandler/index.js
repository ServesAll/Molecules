import React, { useState } from "react";
import ModalFullScreen from "./ModalFullScreen";
import ModalSlider from "./ModalSlider";
import { Box } from "@servesall/atoms";

const ModalHandler = ({ data }) => {
  const { screen_composition } = data;
  const [modalIndex, setModalIndex] = useState(0);
  const [modalData, setModalData] = useState(false);

  const goToNextModal = (data, callback) => {
    data && setModalData(data);
    if (modalIndex === screen_composition.length - 1) {
      callback && callback();
    } else {
      setModalIndex((prev) => prev + 1);
    }
  };

  if (!screen_composition) return null;

  return (
    <>
      {screen_composition.map((screen, index) => {
        if (modalIndex === index) {
          return (
            <Box key={index}>
              {React.cloneElement(screen.modal, {
                goToNextModal,
                key: screen.id,
                modalData: modalData,
              })}
            </Box>
          );
        }
        return null;
      })}
    </>
  );
};

export { ModalHandler, ModalFullScreen, ModalSlider };
