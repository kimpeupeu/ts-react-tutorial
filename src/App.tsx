import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm, { MyFormType } from "./MyForm";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };
  return (
    <div>
      <Greetings name="hello" onClick={onClick} />
      <Counter />
      <MyForm
        onSubmit={(form: MyFormType) => {
          console.log(form.name, form.description);
        }}
      />
    </div>
  );
};

export default App;
