import React from "react";
import CreatorFields from "./CreatorFields";
import {ICreateFieldSettings} from "../interfaces/form.interfaces";

interface IForm {
  settings: Array<ICreateFieldSettings>;
  formData: {[p: string]: string};
  setFormData: React.Dispatch<React.SetStateAction<{[p: string]: string}>>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  buttons?: React.ReactNode;
}
const Form: React.FC<IForm> = ({
                                 settings,
                                 onSubmit,
                                 buttons,
                                 formData,
                                 setFormData
}): JSX.Element => {
  return <form className="form" onSubmit={onSubmit}>
    <div className="form-container">
      <CreatorFields settings={settings} formData={formData} setFormData={setFormData} />
      {buttons}
    </div>
  </form>
}

export default Form;