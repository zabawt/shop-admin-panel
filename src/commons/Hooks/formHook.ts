import { useState } from "react";

export interface IError {
  field: string;
  message: string;
}

export interface IFormState {
  values: { [key: string]: string };
  isValid?: boolean;
  errors?: IError[];
  isSubmitted: boolean;
  isFetching: boolean;
}

interface IUserFormHook {
  formState: IFormState;
  updateValue: (field: string) => (value: string) => void;
  setSubmitted: (isSubmitted: boolean) => void;
  setErrors: (errors: IError[]) => void;
  setFormState: any;
}

export const useFormHook = (initialFormState: IFormState): IUserFormHook => {
  const [formState, setFormState] = useState(initialFormState);

  const updateValue = (field: string) => (value: string): void =>
    void setFormState({
      ...formState,
      values: { ...formState.values, [field]: value }
    });

  const setSubmitted = (isSubmitted: boolean) => {
    setFormState({
      ...formState,
      isSubmitted,
      errors: undefined,
      isValid: true
    });
  };

  const setErrors = (errors: IError[]) => {
    setFormState({ ...formState, errors, isValid: false, isSubmitted: false });
  };

  return {
    formState,
    updateValue,
    setSubmitted,
    setErrors,
    setFormState
  };
};
