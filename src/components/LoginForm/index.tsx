import React, { useState } from "react";
import { SubmitStyled, FormStyled, SpanStyled } from "./styled";
import {
  useFormHook,
  IInitialFormState,
  IError
} from "./../../commons/Hooks/formHook";
import FlexWrapperRow from "./../UI/FlexWrapperRow";
import LoginFormField from "./../LoginFormField";
import validation from "./../../commons/Validation";
import { eventHandler } from "./../../commons/Types";

const LoginForm = (props: {}) => {
  const initialState: IInitialFormState = {
    values: {
      userName: "",
      password: ""
    },
    isSubmitted: false
  };

  const {
    formState,
    updateFormField,
    setIsValid,
    setSubmitted,
    setErrors,
    clearErrors
  } = useFormHook(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (
    field: string
  ): eventHandler<HTMLInputElement> => event => {
    updateFormField(field)(event.currentTarget.value);
  };

  const handleValidation = () => {
    const errors: IError[] = Object.entries(formState.values).reduce(
      (errors: any, [name, value]) => {
        return validation.stringRules.isRequired(value)
          ? errors
          : [...errors, { field: name, message: "Field is required" }];
      },
      []
    );

    if (!!errors) {
      setErrors(errors);
    } else {
      clearErrors();
    }
  };

  /** @todo refactor validation
   * should return errors object, handle submit should decide what to do next
   * */
  const handleSubmit: eventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    handleValidation();
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
