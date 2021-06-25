import styled from "styled-components/native";
import Color from "color";

export const Wrapper = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.color7};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => Color(props.color).lighten(0.5)};
`;

export const AniWrapper = styled.View``;

export const PaxWrapper = styled.View`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -7px;
  right: -7px;
  border-radius: 15px;
  background-color: red;
`;
