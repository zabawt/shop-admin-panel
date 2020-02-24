import React, { useState } from "react";
import {
  SubmitStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  SpanStyled
} from "./styled";
import { useFormHook } from "./../../commons/Hooks/formHook";

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

  const fieldTypes: { [key: string]: string } = {
    userName: "text",
    password: passwordVisible ? "text" : "password"
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {Object.keys(formState).map(field => (
        <React.Fragment key={`key${field}`}>
          <LabelStyled>{field}</LabelStyled>
          <InputStyled
            name={field}
            onChange={handleChange(field)}
            value={formState[field]}
            type={fieldTypes[field]}
          />
          {field === "password" && (
            <SpanStyled onClick={handleTogglePasswordVisibility}>
              &#128065;
            </SpanStyled>
          )}
        </React.Fragment>
      ))}

      <SubmitStyled type="submit" value="Login" />
    </FormStyled>
  );
};

export default LoginForm;
