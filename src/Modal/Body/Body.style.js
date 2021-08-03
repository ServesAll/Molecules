import styled from "styled-components/native";

export const Body = styled.View``;

export const PanBarWrap = styled.View`
  height: 30px;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;

export const PanBar = styled.View`
  width: 180px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 6px;
  border-radius: 3px;
`;

export const BodyWrap = styled.View`
  height: ${(props) => props.height}px;
`;
