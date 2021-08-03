import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  min-height: 90px;
  background-color: ${(props) => props.theme.color1};
  border-top-width: 1px;
  border-color: ${(props) => props.theme.color7};
`;
