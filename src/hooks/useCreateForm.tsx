import React, { useMemo, useState } from 'react';
import { data } from '../modules/main/constants/main.constants';

interface ICallbackCreateForm {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setFormData: (
    value:
      | ((prevState: { [p: string]: string }) => { [p: string]: string })
      | { [p: string]: string },
  ) => void;
  formData: { [p: string]: string };
  isDisabled: boolean;
}
export default function useCreateForm(onSubmit: () => void): ICallbackCreateForm {
  const [formData, setFormData] = useState<{ [p: string]: string }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const isDisabled = useMemo(() => {
    return data.reduce((acc, val) => {
      if (val.required && !formData[val.id]) return true;
      return acc;
    }, false);
  }, [formData]);

  return { isDisabled, handleSubmit, formData, setFormData };
}
