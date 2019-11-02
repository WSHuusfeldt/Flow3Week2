import React, { useState } from 'react';

function CountingPlusMinus({ val }) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <label>
      <p>You have counted {count} times</p>
      <label>
        <input
          type="number"
          value={val}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <br />
      <button onClick={() => setCount(parseInt(count) + parseInt(value))}>
        Count
      </button>
      <button onClick={() => setCount(value)}>Set count</button>
    </label>
  );
}

export default function App() {
  return <CountingPlusMinus />;
}
