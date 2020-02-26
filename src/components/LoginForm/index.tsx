import React, { useState } from "react";
import {
  SubmitStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SpanStyled
} from "./styled";
import { useFormHook } from "./../../commons/Hooks/formHook";
import FlexWrapperRow from "./../UI/FlexWrapperRow";

const LoginForm = (props: {}) => {
  const initialState = {
    userName: "",
    password: ""
  };

  const { formState, updateFormField } = useFormHook(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleChange = (field: string) => (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => updateFormField(field)(event.currentTarget.value);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleTogglePasswordVisibility = (
    event: React.SyntheticEvent<HTMLSpanElement>
  ): void => {
    setPasswordVisible(!passwordVisible);
  };

  const fieldTypes: { [key: string]: any } = {
    userName: {
      type: "text"
    },
    password: {
      type: passwordVisible ? "text" : "password",
      component: (
        <SpanStyled onClick={handleTogglePasswordVisibility}>
          &#128065;
        </SpanStyled>
      )
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {Object.keys(formState).map(field => (
        <FlexWrapperRow key={`key${field}`}>
          <LabelStyled>{field}</LabelStyled>
          <InputStyled
            name={field}
            onChange={handleChange(field)}
            value={formState[field]}
            type={fieldTypes[field].type}
          />
          {fieldTypes[field].component}
        </FlexWrapperRow>
      ))}
      <SubmitStyled type="submit" value="Login" />
    </FormStyled>
  );
};

export default LoginForm;
