import React from "react";
import { AuthPageContainer } from "./styled";
import LoginForm from "./../LoginForm";

const AuthPage = (props: {}) => {
  return (
    <AuthPageContainer>
      <LoginForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
