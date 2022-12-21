import styled from "styled-components/native";

export const ImageWrapper = styled.View`
  aspect-ratio: 1;
  height: 90px;
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  overflow: hidden;
`;

export const StatusWrapper = styled.View`
  border-radius: 4px;
  background-color: ${(props) => props.color};
  justify-content: center;
  padding-vertical: 6px;
`;
