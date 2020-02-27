import { useState, useEffect } from "react";
import { keyValuePair, eventHandler } from "../Types";
export interface IError {
  field: string;
  message: string;
}

export interface IFormState {
  values: keyValuePair<string>;
  validation: {
    [field: string]: Array<(value: string) => boolean>;
  };
  touched?: boolean;
  errors?: IError[];
  isSubmitted: boolean;
  isFetching: boolean;
}

interface IUserFormHook {
  formState: Partial<IFormState>;
  values: keyValuePair<string>;
  updateValue: eventHandler<HTMLInputElement>;
  submitForm: () => void;
  errors: IError[];
}

export const useForm = (initialFormState: IFormState): IUserFormHook => {
  const {
    values: initialValues,
    validation: initialValidation,
    errors: initialErrors = [],
    ...rest
  } = initialFormState;
  const [formState, setFormState] = useState(rest);
  const [values, setValues] = useState(initialValues);
  // eslint-disable-next-line
  const [validation, setValidation] = useState(initialValidation);
  const [errors, setErrors] = useState(initialErrors);

  /** Clean errors if succesfully validated in handleSubmit */
  useEffect(() => {
    if (formState.isSubmitted) {
      setErrors([]);
    }
  }, [formState.isSubmitted]);

  const formTouched = () => {
    if (!formState.touched)
      setFormState({
        ...formState,
        touched: true
      });
  };

  const updateValue: eventHandler<HTMLInputElement> = event => {
    event.persist();
    const { name, value } = event.currentTarget;
    setValues({
      ...values,
      [name]: value
    });
    formTouched();
  };

  const submitForm = () => {
    const errors = Object.entries(values).reduce(
      (errors: IError[], [name, value]) => {
        return validation[name].reduce(
          (result, rule) => result && rule(value),
          true
        )
          ? errors
          : [
              ...errors,
              {
                field: name,
                message: "Field is required"
              }
            ];
      },
      []
    );

    if (errors.length === 0 && formState.touched) {
      setFormState({
        ...formState,
        isSubmitted: true
      });
    } else {
      setErrors(errors);
    }
  };

  return {
    formState,
    values,
    errors,
    updateValue,
    submitForm
  };
};
