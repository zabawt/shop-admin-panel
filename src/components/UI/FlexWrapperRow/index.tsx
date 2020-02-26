import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlexWrapper = (props: { children: any }) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default FlexWrapper;
