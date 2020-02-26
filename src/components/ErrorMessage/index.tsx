import React from "react";
import { StyledSpan } from "./styled";

const ErrorMessage = (props: { message: string }) => {
  return <StyledSpan>{props.message}</StyledSpan>;
};

export default ErrorMessage;
