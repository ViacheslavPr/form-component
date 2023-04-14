import React from "react";
import {ICreateFieldSettings} from "../interfaces/form.interfaces";
import CreateField from "./CreateField";

interface ICreatorFields {
  settings: Array<ICreateFieldSettings>;
  formData: {[p: string]: string};
  setFormData: React.Dispatch<React.SetStateAction<{[p: string]: string}>>;
}
const CreatorFields: React.FC<ICreatorFields> = ({
                                                   settings,
                                                   formData,
                                                   setFormData
}): JSX.Element => {
  return <>{settings.map((val) =>
    <CreateField value={val} formData={formData} setFormData={setFormData} key={val.id} />
  )}</>
}

export default CreatorFields;