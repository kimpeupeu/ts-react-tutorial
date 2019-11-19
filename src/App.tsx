import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };
  return (
    <div>
      <Greetings name="hello" onClick={onClick} />
      <Counter />
    </div>
  );
};

export default App;
