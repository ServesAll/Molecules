import styled from "styled-components/native";

export const Wrapper = styled.View`
  border-width: 1px;
  background-color: ${(props) => props.theme.color1};
  border-color: ${(props) =>
    props.border ? props.theme.color7 : props.theme.color1};
  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => props.styles};
`;
