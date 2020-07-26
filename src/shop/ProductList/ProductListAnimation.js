import styled, { keyframes } from "styled-components";
import { zoomInUp } from "react-animations";

const zoomInUpAnimation = keyframes`${zoomInUp}`;

export const ZoomInUpWrapperDiv = styled.div`
  animation: 1.5s ${zoomInUpAnimation};
`;





