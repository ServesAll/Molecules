import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: ${(props) => props.theme.color7};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.color1};
  overflow: hidden;
`;
