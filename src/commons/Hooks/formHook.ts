import { useState } from "react";

export interface IError {
  field: string;
  message: string;
}

export interface IFormState {
  values: { [key: string]: string };
  validation: {
    [field: string]: Array<(value: string) => boolean>;
  };
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
  validateForm: () => void;
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

  const setErrors = (errors: IError[]): void => {
    setFormState({ ...formState, errors, isValid: false, isSubmitted: false });
  };

  const validateForm = (): void => {
    const { values, validation } = formState;
    const errors = Object.entries(values).reduce(
      (errors: IError[], [name, value]) => {
        return validation[name].reduce(
          (result, rule) => result && rule(value),
          true
        )
          ? errors
          : [...errors, { field: name, message: "Field is required" }];
      },
      []
    );

    setErrors(errors);
  };

  return {
    formState,
    updateValue,
    setSubmitted,
    setErrors,
    setFormState,
    validateForm
  };
};
