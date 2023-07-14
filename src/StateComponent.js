import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(0);

  function update() {
    setData(data + 1);
  }

  console.warn("___________");

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={update}>Click me</button>
    </div>
  );
}

export default App;


