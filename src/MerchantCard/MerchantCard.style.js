import styled from "styled-components/native";

export const MerchantCardWrapper = styled.View`
  margin: ${(props) => props.theme.margin};
`;

export const ImageWrapper = styled.View`
  aspect-ratio: 1;
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  overflow: hidden;
`;
