import styled from "styled-components/native";

export const GreyBar = styled.View`
  width: 100%;
  position: absolute;
  height: 16px;
  top: 50%;
  margin-top: -8px;
  background-color: ${(props) => props.theme.color10};
  border-radius: 8px;
`;

export const Step = styled.View`
  width: 16px;
  position: absolute;
  height: 16px;
  top: 50%;
  left: ${(props) => props.left}%;
  margin-left: -8px;
  margin-top: -8px;
  background-color: ${(props) => props.theme.color10};
  border-radius: 8px;
`;
