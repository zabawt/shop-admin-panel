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
  setIsValid: any;
  setErrors: any;
  clearErrors: any;
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

  /** @todo simply form methods
   * - form invalidate
   * - form validate
   * - form submit
   */
  const setSubmitted = (isSubmitted: boolean) => {
    setFormState({ ...formState, isSubmitted: isSubmitted });
  };

  const setIsValid = (isValid: boolean) => {
    setFormState({ ...formState, isValid: isValid });
  };

  const setErrors = (errors: IError[]) => {
    setFormState({ ...formState, errors, isValid: false, isSubmitted: false });
  };

  const clearErrors = () => {
    const updatedState = {
      ...formState,
      values: { ...formState.values },
      isValid: true
    };
    delete updatedState.errors;
    setFormState(updatedState);
  };

  return {
    formState,
    updateFormField,
    setSubmitted,
    setIsValid,
    setErrors,
    clearErrors
  };
};
