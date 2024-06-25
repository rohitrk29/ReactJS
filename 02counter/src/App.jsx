import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCount] = useState(0)

  // let counter = 10;

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    // setCount(prevCounter => preCounter + 1)
    // setCount(prevCounter => preCounter + 1)
    // setCount(prevCounter => preCounter + 1)
    // setCount(prevCounter => preCounter + 1)
    console.log(setCount(counter));
  }

  const removeValue = () => {
    console.log("value remove", counter);
    counter = counter - 1;
    console.log(setCount(counter));
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value </button>
      <button onClick={removeValue}>Remove value </button>
    </>
  );
}

export default App;
