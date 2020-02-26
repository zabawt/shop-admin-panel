import React from "react";
import { StyledDiv, StyledDivContainer } from "./styled";

const Loader = (props: { isFetching: boolean }) => {
  return props.isFetching ? (
    <StyledDivContainer>
      {" "}
      <StyledDiv></StyledDiv>
    </StyledDivContainer>
  ) : null;
};

export default Loader;
