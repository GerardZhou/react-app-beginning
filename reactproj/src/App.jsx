import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hello from "./components/Hello";
import Greet from "./components/Greet";
import Fruits from "./components/Fruits";

function App() {
  const person = {
    name: "Karl",
    message: "Hello!",
    randNums: [1, 2, 3],
  };
  return (
    <div className="App">
      <Hello />
      <Greet person={person} />
      <Fruits />
    </div>
  );
}

export default App;
