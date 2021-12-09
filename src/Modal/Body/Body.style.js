import styled from "styled-components/native";

export const Body = styled.View``;

export const PanBarWrap = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;

export const PanBar = styled.View`
  width: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 6px;
  border-radius: 3px;
`;

export const BodyWrap = styled.View`
  height: ${(props) => props.height}px;
`;
