import { useState } from "react";

export const useForm = (state:any) => {
  const [formState, setFormState] = useState(state);

  const onInputChange = (target: EventTarget & HTMLInputElement) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  };
  const onResetForm = () => {
    setFormState(state);
  }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm

  }
}
