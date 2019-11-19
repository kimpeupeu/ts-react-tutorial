import React, { useState } from "react";

export type MyFormType = {
  name: string;
  description: string;
};

type MyFormProps = {
  onSubmit: (form: MyFormType) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({ name: "", description: "" } as MyFormType);
  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">Regist</button>
    </form>
  );
}

export default MyForm;
