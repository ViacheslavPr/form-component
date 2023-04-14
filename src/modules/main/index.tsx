import React from "react";
import {Form} from "../../components";
import { data } from "./constants/main.constants";
import useCreateForm from "../../hooks/useCreateForm";

const MainPage:React.FC = () => {
  const { isDisabled, handleSubmit, formData, setFormData} = useCreateForm(() => {
    console.log('Result submit: ', formData)
  })

  return <Form
    formData={formData}
    setFormData={setFormData}
    settings={data}
    onSubmit={handleSubmit}
    buttons={
      <div>
        <button className="form-submit" type="submit" disabled={isDisabled}>Войти</button>
      </div>
  }
  />
}

export default MainPage;