import './Music.module.scss';
import React, { useState } from 'react';

const Music = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    return setState(state + 1);
  };

  const decrement = () => {
    return setState(state - 1);
  };
  return (
    <div>
      <div>{state}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Music;
