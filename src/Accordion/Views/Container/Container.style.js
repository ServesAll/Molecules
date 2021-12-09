import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${(props) =>
    props.background ? props.theme.color1 : "transparent"};
  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => props.styles};
`;
