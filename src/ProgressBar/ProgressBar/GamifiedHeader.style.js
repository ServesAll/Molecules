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

export const GreenBar = styled.View`
  width: 30%;
  position: absolute;
  height: 16px;
  top: 50%;
  margin-top: -8px;
  background-color: ${(props) => props.theme.green};
  border-radius: 8px;
`;

export const BarWrapper = styled.View`
  flex-grow: 1;
  min-height: 16px;
`;

export const SubmitWrapper = styled.View``;

export const Step = styled.View`
  width: 20px;
  position: absolute;
  height: 20px;
  top: 50%;
  left: ${(props) => props.left}%;
  margin-left: -10px;
  margin-top: -10px;
  background-color: ${(props) => props.theme.color10};
  border-radius: 10px;
`;
