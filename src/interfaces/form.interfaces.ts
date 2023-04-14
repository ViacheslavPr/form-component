export enum ETypeSettings {
  inputText = "inputText",
  inputEmail = "inputEmail",
  inputPassword = "inputPassword",
}

export interface ICreateFieldSettings {
  id: string;
  type: ETypeSettings;
  label: string;
  defaultValue?: string;
  required?: boolean;
}

export enum ETypes {
  inputText = "text",
  inputEmail = "email",
  inputPassword = "password",
}
