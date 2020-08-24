import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

export const FadeInAnimationDiv = styled.div`
  animation: 1.25s ${fadeInAnimation};
`;