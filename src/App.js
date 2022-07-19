import React from "react"
import './App.css';
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <button onClick={() => setCounter(counter+1)} className="counter">+</button>
      <button onClick={() => setCounter(counter-1)} className="counter">-</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
