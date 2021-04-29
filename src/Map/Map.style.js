import styled from "styled-components/native";

export const MapWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 400px;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius};
  margin: ${(props) => props.theme.padding} 0;
`;

export const MarkerWrapper = styled.View`
  position: absolute;
  z-index: 9;
  width: 80px;
  height: 120px;
  align-items: center;
    justify-content: center;
`;
