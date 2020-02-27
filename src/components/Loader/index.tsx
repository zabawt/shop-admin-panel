import React from "react";
import { StyledDiv, StyledDivContainer } from "./styled";

interface ILoaderProps {
  isFetching?: boolean;
}

const Loader = ({ isFetching }: ILoaderProps) => {
  return isFetching ? (
    <StyledDivContainer>
      <StyledDiv />
    </StyledDivContainer>
  ) : null;
};

export default Loader;
