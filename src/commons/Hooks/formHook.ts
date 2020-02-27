import { useState } from "react";
import { keyValuePair, eventHandler } from "./../Types";
export interface IError {
  field: string;
  message: string;
}

export interface IFormState {
  values: keyValuePair<string>;
  validation: {
    [field: string]: Array<(value: string) => boolean>;
  };
  isValid?: boolean;
  touched?: boolean;
  errors?: IError[];
  isSubmitted: boolean;
  isFetching: boolean;
}

interface IUserFormHook {
  formState: Partial<IFormState>;
  values: keyValuePair<string>;
  updateValue: eventHandler<HTMLInputElement>;
  validateForm: () => void;
  submitForm: () => void;
  errors: IError[];
}

export const useFormHook = (initialFormState: IFormState): IUserFormHook => {
  const {
    values: initialValues,
    validation: initialValidation,
    errors: initialErrors = [],
    ...rest
  } = initialFormState;
  const [formState, setFormState] = useState(rest);
  const [values, setValues] = useState(initialValues);
  const [validation, setValidation] = useState(initialValidation);
  const [errors, setErrors] = useState(initialErrors);

  const formTouched = () => {
    setFormState({ ...formState, touched: true });
  };

  const updateValue: eventHandler<HTMLInputElement> = event => {
    event.persist();
    const { name, value } = event.currentTarget;
    setValues({ ...values, [name]: value });
    formTouched();
  };

  const submitForm = () => {
    if (errors.length === 0 && formState.touched) {
      setFormState({
        ...formState,
        isSubmitted: true,
        isValid: true
      });
    }
  };

  const validateForm = (): void => {
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
    values,
    errors,
    updateValue,
    validateForm,
    submitForm
  };
};
