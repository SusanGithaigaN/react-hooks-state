import React, { useState } from "react";

function Counter() {
  //  count: a reference to the current value of that state in React's internals
  // setCount: a setter function so we can update that state
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`);

     // call setCount twice, to update the counter by two every time we click
     setCount((currentCount) => currentCount + 1);
     setCount((currentCount) => currentCount + 1);
    console.log(`after setState: ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
