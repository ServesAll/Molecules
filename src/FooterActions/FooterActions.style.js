import styled from "styled-components/native";

export const Wrapper = styled.View`
flex: 1;
  min-height: 100px;
  background-color: ${(props) => props.theme.color1};
  borderTopWidth: 1px;
  borderColor: ${(props) => props.theme.color7};
`;
