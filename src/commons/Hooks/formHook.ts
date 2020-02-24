import { useState } from "react";

interface IInitialFormState {
  [key: string]: string;
}

export const useFormHook = (initialFormState: IInitialFormState) => {
  const [formState, setFormState] = useState(initialFormState);

  const updateFormField = (field: string) => (value: string): void =>
    void setFormState({ ...formState, [field]: value });

  return { formState, updateFormField };
};
