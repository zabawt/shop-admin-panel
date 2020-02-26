import React from "react";
import { InputStyled, LabelStyled } from "./styled";
import { eventHandler } from "./../../commons/Types";

interface ILoginFormField {
  name: string;
  value: string;
  type: string;
  handleChange: eventHandler<HTMLInputElement>;
}

const LoginFormField = (props: ILoginFormField) => {
  const { name, value, type, handleChange } = props;
  return (
    <>
      <LabelStyled>{name}</LabelStyled>
      <InputStyled
        name={name}
        onChange={handleChange}
        value={value}
        type={type}
      />
    </>
  );
};

export default LoginFormField;
