import React, { useState } from "react";
import { SubmitStyled, FormStyled, SpanStyled } from "./styled";
import {
  useFormHook,
  IFormState,
  IError
} from "./../../commons/Hooks/formHook";
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
    isSubmitted: false,
    isFetching: false
  };

  const {
    formState,
    updateValue,
    setSubmitted,
    setErrors,
    setFormState
  } = useFormHook(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (
    field: string
  ): eventHandler<HTMLInputElement> => event => {
    updateValue(field)(event.currentTarget.value);
  };

  const validateForm = (): IError[] => {
    const { isRequired } = validation.stringRules;
    return Object.entries(formState.values).reduce(
      (errors: IError[], [name, value]) => {
        return isRequired(value)
          ? errors
          : [...errors, { field: name, message: "Field is required" }];
      },
      []
    );
  };

  const handleSubmit: eventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const errors = validateForm();

    if (!!errors.length) {
      setErrors(errors);
    } else {
      /** @todo some POST request to auth API */

      setFormState({ ...formState, isFetching: true });
    }
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
