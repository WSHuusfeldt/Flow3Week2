import React, { useState } from 'react';

function ListItem(props) {
  return props.number;
}

function NumberList({ numbers }) {
  console.log('--NUMBERS -->', numbers);
  const listItems = numbers.map((n, i) => (
    <li key={i}>
      <ListItem number={n} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function NumberTable({ numbers }) {
  const items = numbers.map((n, index) => (
    <tr key={index}>
      <td>
        <ListItem number={n} />
      </td>
    </tr>
  ));
  return (
    <table>
      <tbody>{items}</tbody>
    </table>
  );
}

function ListDemo(props) {
  console.log(props.numbers);
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
      <NumberTable numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
