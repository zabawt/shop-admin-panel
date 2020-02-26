import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledDivContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
  display: flex;
  user-select: none;
  > * {
    user-select: none;
    pointer-events: none;
  }
`;

export const StyledDiv = styled.div`
  margin: auto;
  border: 1em solid ${props => props.theme.colors.backgrounds.main};
  border-radius: 50%;
  border-bottom: 1em solid ${props => props.theme.colors.foregrounds.second};
  width: 5em;
  height: 5em;
  animation: ${spinnerAnimation} 1s linear infinite;
`;
