import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "rohit",
    age: "23"
  }

  return (
    <>
      <h1 className="bg-orange-400">Tailwind</h1>

      <Card username="asus" btnText="click me"/>
      <Card username="dell" />
    </>
  );
}

export default App;
