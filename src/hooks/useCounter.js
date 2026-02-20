import { useState } from "react";

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(c => c + 1);
  };

  const decrement = () => {
    setCounter(c => c - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};
