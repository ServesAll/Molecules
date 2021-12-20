import styled from "styled-components/native";

export const Body = styled.View`
  width: 100%;
  flex: 1;
  ${(props) => !props.isOpen && "position: absolute"};
  z-index: ${(props) => (props.isOpen ? 1 : -1)};
`;
