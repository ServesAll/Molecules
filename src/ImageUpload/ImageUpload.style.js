import styled from "styled-components/native";

export const UploadWrapper = styled.View`
  aspect-ratio: 1.5;
  overflow: hidden;
  background-color: ${(props) => props.theme.color7};
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: 2px;
  border-style: dashed;
  border-color: ${(props) => props.theme.greyText};
`;

export const UploadIconWrapper = styled.View`
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
