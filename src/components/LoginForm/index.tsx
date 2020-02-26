import React, { useState } from "react";
import { SubmitStyled, FormStyled, SpanStyled } from "./styled";
import { useFormHook } from "./../../commons/Hooks/formHook";
import FlexWrapperRow from "./../UI/FlexWrapperRow";
import LoginFormField from "./../LoginFormField";
import validation from "./../../commons/Validation";
import { eventHandler } from "./../../commons/Types";

const LoginForm = (props: {}) => {
  const initialState = {
    userName: "",
    password: ""
  };

  const { formState, updateFormField } = useFormHook(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (
    field: string
  ): eventHandler<HTMLInputElement> => event =>
    void updateFormField(field)(event.currentTarget.value);

  const handleBlur = (field: string): eventHandler<HTMLInputElement> => event =>
    void validate(event.currentTarget.value);

  const validate = (value: string) => {};

  const handleSubmit: eventHandler<HTMLFormElement> = event =>
    void event.preventDefault();

  const togglePasswordVisibility: eventHandler<HTMLSpanElement> = event =>
    void setPasswordVisible(!passwordVisible);

  const formFieldData: { [key: string]: any } = {
    userName: {
      type: "text"
    },
    password: {
      type: passwordVisible ? "text" : "password",
      component: (
        <SpanStyled onClick={togglePasswordVisibility}>&#128065;</SpanStyled>
      )
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {Object.keys(formState).map(field => (
        <FlexWrapperRow key={`key${field}`}>
          <LoginFormField
            name={field}
            type={formFieldData[field].type}
            value={formState[field]}
            handleChange={handleChange(field)}
          />
          {formFieldData[field].component}
        </FlexWrapperRow>
      ))}
      <SubmitStyled type="submit" value="Login" />
    </FormStyled>
  );
};

export default LoginForm;
