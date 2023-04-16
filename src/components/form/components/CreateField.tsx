import React, { useEffect } from 'react';
import { ETypes, ICreateFieldSettings } from '../../../interfaces/form.interfaces';

interface ICreateField {
  value: ICreateFieldSettings;
  formData: { [p: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [p: string]: string }>>;
}
const CreateField: React.FC<ICreateField> = ({ value, formData, setFormData }) => {
  const handleChange = (eventValue: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(data => ({ ...data, [value.id]: eventValue.target.value }));

  useEffect(() => {
    if (!formData[value.id] && formData[value.id] !== '') {
      setFormData({ ...formData, [value.id]: value.defaultValue || '' });
    }
  }, [formData, setFormData, value.defaultValue, value.id]);
  return (
    <div className="form-field" key={value.id}>
      <input
        type={ETypes[value.type]}
        name={value.id}
        defaultValue={value.defaultValue}
        required={value.required}
        placeholder={value.label}
        onChange={handleChange}
      />
    </div>
  );
};

export default CreateField;
