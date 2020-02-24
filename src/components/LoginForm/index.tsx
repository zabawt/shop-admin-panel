import * as React from "react";
import { SubmitStyled, FormStyled, InputStyled } from "./styled";
import { useFormHook } from "./../../commons/Hooks/formHook";

const LoginForm = (props: {}) => {
  const initialState = {
    userName: "",
    password: ""
  };

  const { formState, updateFormField } = useFormHook(initialState);

  const handleChange = (field: string) => (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => updateFormField(field)(event.currentTarget.value);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {Object.keys(formState).map(field => (
        <InputStyled
          name={field}
          onChange={handleChange(field)}
          value={formState[field]}
        />
      ))}
      <SubmitStyled type="submit" onClick={() => {}} />
    </FormStyled>
  );
};

export default LoginForm;
