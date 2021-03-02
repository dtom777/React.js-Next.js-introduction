import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const clickFunc = () => {
    setCount(count + 1);
  };
  const changeFlag = (e) => {
    setFlag(e.target.checked);
  };

  return (
    <div>
      <h1>React</h1>
      <h4>Hooks sample</h4>
      <div>
        <p>{count}</p>
        <button onClick={clickFunc}>countUp</button>
      </div>
      <div>
        <input type="checkbox" onChange={changeFlag} id="check1" />
        <label htmlFor="check1">change form style</label>
      </div>
    </div>
  );
};

export default App;
