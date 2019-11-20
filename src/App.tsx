import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import HookCounterContainer from "./containers/HookCounterContainer";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <CounterContainer />
      <HookCounterContainer />
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default App;
