import styled from "styled-components/native";

export const Head = styled.View`
  ${(props) => props.styles};
`;

export const Wrap = styled.View`
  background-color: ${(props) => props.theme.color1};
  border-radius: 30px;
`;
