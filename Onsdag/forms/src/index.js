import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormDemo from './FormDemo';
import FormDemoM from './FormDemoMultiple';

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="multiple">
        FormDemo Multiple
      </a>{' '}
      &nbsp;
      <a href="/" className="x" id="formdemo">
        FormDemo
      </a>{' '}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== 'x') {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case 'multiple':
      app = <FormDemoM />;
      break;
    case 'formdemo':
      app = <FormDemo />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
