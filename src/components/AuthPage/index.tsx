import * as React from "react";
import { AuthPageContainer } from "./styled";
import styled from "styled-components";

/**@todo create generic button component */
const LoginButton = styled.a`
  ${props => props.theme.mixins.button()}
`;

const AuthPage = (props: {}) => {
  return (
    <AuthPageContainer>
      <LoginButton>Login</LoginButton>
    </AuthPageContainer>
  );
};

export default AuthPage;
