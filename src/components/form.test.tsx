import React from "react";
import { render, screen } from '@testing-library/react';
import Form from "./Form";
import {ETypeSettings} from "../interfaces/form.interfaces";

test('form', () => {
  render(
    <Form
      settings={[{
        id: "first_name",
        type: ETypeSettings.inputText,
        label: "First Name",
        defaultValue: "Some first name"
      }]}
      formData={{}}
      onSubmit={() => {}}
      setFormData={() => {}}
    />
  );
  const valueElement = screen.getByDisplayValue(/Some first name/i);
  expect(valueElement).toBeInTheDocument();
});