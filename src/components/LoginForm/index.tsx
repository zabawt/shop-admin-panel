import * as React from "react";

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

  return (
    <form onSubmit={() => {}}>
      {Object.keys(formState).map(field => (
        <input
          name={field}
          onChange={handleChange(field)}
          value={formState[field]}
        />
      ))}
      <input type="submit" value="submit" />
    </form>
  );
};

export default LoginForm;
