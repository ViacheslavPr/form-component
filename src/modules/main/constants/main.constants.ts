import {ETypeSettings, ICreateFieldSettings } from "../../../interfaces/form.interfaces";

export const data: Array<ICreateFieldSettings> = [
  {
    id: "first_name",
    type: ETypeSettings.inputText,
    label: "First Name",
    defaultValue: "Some first name"
  },
  {
    id: "last_name",
    type: ETypeSettings.inputText,
    label: "Last Name"
  },
  {
    id: "email",
    type: ETypeSettings.inputEmail,
    label: "Email",
    required: true
  },
  {
    id: "password",
    type: ETypeSettings.inputPassword,
    label: "Password",
    required: true
  }
];