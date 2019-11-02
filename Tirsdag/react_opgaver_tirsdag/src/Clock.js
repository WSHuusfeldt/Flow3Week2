import React, { useState } from 'react';

function Clock(props) {
  return <p>The time is {props.date.toLocaleString}</p>;
}

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
// }

export default function App() {
  return <Clock />;
}
