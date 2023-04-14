import React, { useMemo, useState } from "react";
import Form from "../../components/Form";
import { data } from "./constants/main.constants";

const MainPage:React.FC = () => {
  const [formData, setFormData] = useState<{[p: string]: string}>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Result submit: ', formData)
  }

  const isDisabled = useMemo(() => {
    return data.reduce((acc, val) => {
      if (val.required && !formData[val.id]) return true;
      return acc;
    }, false)
  }, [formData]);

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