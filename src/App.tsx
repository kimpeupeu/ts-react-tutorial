import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import HookCounterContainer from "./containers/HookCounterContainer";

const App: React.FC = () => {
  return (
    <div>
      <CounterContainer />
      <HookCounterContainer />
    </div>
  );
};

export default App;
