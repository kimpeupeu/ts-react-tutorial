import React from "react";
import useCounter from "../hooks/useCounter";
import Counter from "../components/Counter";

function HookCounterContainer() {
  const { count, onDecrease, onIncrease, onIncreaseBy } = useCounter();

  return (
    <Counter
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      onIncreaseBy={() => onIncreaseBy(7)}
    />
  );
}

export default HookCounterContainer;
