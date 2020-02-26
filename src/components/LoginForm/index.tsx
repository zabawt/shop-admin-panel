import React, { useState } from "react";
import { SubmitStyled, FormStyled, SpanStyled } from "./styled";
import { useFormHook, IFormState } from "./../../commons/Hooks/formHook";
import FlexWrapperRow from "./../UI/FlexWrapperRow";
import LoginFormField from "./../LoginFormField";
import validation from "./../../commons/Validation";
import { eventHandler } from "./../../commons/Types";
import Loader from "../Loader";

const LoginForm = (props: {}) => {
  const initialState: IFormState = {
    values: {
      userName: "",
      password: ""
    },
    validation: {
      userName: [validation.stringRules.isRequired],
      password: [validation.stringRules.isRequired]
    },
    isSubmitted: false,
    isFetching: false
  };

  const { formState, updateValue, validateForm } = useFormHook(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (
    field: string
  ): eventHandler<HTMLInputElement> => event => {
    updateValue(field)(event.currentTarget.value);
  };

  const handleSubmit: eventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    validateForm();
  };

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
      <Loader isFetching={formState.isFetching} />
      {Object.entries(formState.values).map(([name, value]) => (
        <FlexWrapperRow key={`key${name}`}>
          <LoginFormField
            name={name}
            type={formFieldData[name].type}
            value={value}
            handleChange={handleChange(name)}
          />
          {formFieldData[name].component}
        </FlexWrapperRow>
      ))}
      <SubmitStyled type="submit" value="Login" />
    </FormStyled>
  );
};

export default LoginForm;
