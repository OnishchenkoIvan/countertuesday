import React, { useEffect, useState } from "react";
import "./App.css";
import { Setter } from "./components/Setter/Setter";
import { Counter } from "./components/Counter/Counter";

function App() {
  const countMax: number = 5;
  const countStart: number = 0;

  const [count, setCount] = useState<number>(countStart);

  useEffect(() => {
    let valueAsString = localStorage.getItem("counterValue");
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setCount(newValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(count));
  }, [count]);

  const Increment = () => {
    setCount(count + 1);
  };

  const Reset = () => {
    setCount(countStart);
  };

  return (
    <div className="App">
      <Setter />
      <Counter
        countCurent={count}
        onClickIncrement={Increment}
        onClickReset={Reset}
        countMax={countMax}
        countStart={countStart}
      />
    </div>
  );
}

export default App;
