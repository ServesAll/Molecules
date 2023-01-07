import styled from "styled-components/native";

export const MerchantCardWrapper = styled.View`
  margin-horizontal: ${(props) => props.theme.margin};
  margin-top: ${(props) => props.theme.margin};
`;

export const ImageWrapper = styled.View`
  aspect-ratio: 0.9;
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  overflow: hidden;
`;
