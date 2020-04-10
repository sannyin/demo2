import React, { useState, useContext, createContext } from "react";
import { connect } from "dva";
import { Button } from "antd";

function Number(props) {
  let counter = useCounter();
 
  return (
    <div>
      <Counter.Provider value={counter}>
        <CounterDisplay />
      </Counter.Provider>
    </div>
  );
}
function useCounter() {
  let [count, setCount] = useState(0);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let Counter = createContext(null);

function CounterDisplay() {
  let counter = useContext(Counter);
  return (
    <div>
      <Button onClick={counter.decrement}>-</Button>
      <p>You clicked {counter.count} times</p>
      <Button onClick={counter.increment}>+</Button>
    </div>
  );
}

export default connect(state => {
  return {};
})(Number);
