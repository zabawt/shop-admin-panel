import { useState } from "react";

export interface IError {
  field: string;
  message: string;
}

export interface IInitialFormState {
  values: { [key: string]: string };
  isValid?: boolean;
  errors?: IError[];
  isSubmitted: boolean;
}

interface IUserFormHook {
  formState: IInitialFormState;
  updateFormField: any;
  setSubmitted: any;
  setErrors: any;
}

export const useFormHook = (
  initialFormState: IInitialFormState
): IUserFormHook => {
  const [formState, setFormState] = useState(initialFormState);

  const updateFormField = (field: string) => (value: string): void =>
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
    updateFormField,
    setSubmitted,
    setErrors
  };
};
