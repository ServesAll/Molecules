import styled from "styled-components/native";

export const Body = styled.View`
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.color1};
  border-width: 1px;
  border-color: ${(props) => props.theme.color10};
`;

export const Wrapper = styled.View`
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const ImageWrap = styled.View`
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;
