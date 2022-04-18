import styled from "styled-components/native";

export const SuccessStep = styled.View`
  width: 26px;
  position: absolute;
  height: 26px;
  top: 50%;
  left: ${(props) => props.left}%;
  margin-left: -13px;
  margin-top: -13px;
  border-radius: 13px;
`;
