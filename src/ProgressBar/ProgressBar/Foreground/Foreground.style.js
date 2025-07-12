import styled from "styled-components/native";

export const GreenBar = styled.View`
  width: 100%;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  margin-top: -8px;
`;

export const GreenStep = styled.View`
  width: 16px;
  position: absolute;
  height: 16px;
  top: 50%;
  left: ${(props) => props.left}%;
  margin-left: -16px;
  margin-top: -8px;
  background-color: ${(props) => props.theme.green};
  border-radius: 8px;
`;

export const PulseWrapper = styled.View`
  width: 32px;
  position: absolute;
  height: 32px;
  top: 50%;
  left: ${(props) => props.left}%;
  margin-left: -24px;
  margin-top: -16px;
`;
