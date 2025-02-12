import React, { useState } from "react";
import "./CounterApp.css"; // Import the CSS file

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
       
      <div className="counter-box">
        <h1 style={{color:'black'}}>Counter App</h1>
        <p className="count">{count}</p>
        <div className="button-group">
          <button className="btn increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="btn decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
