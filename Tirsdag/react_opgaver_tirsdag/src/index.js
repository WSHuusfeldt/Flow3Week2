import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
import App from './App';
import LDApp from './ListDemoApp';
import LDApp2 from './ListDemoApp2';
import SAE from './StateAndEvent';
import Clock from './Clock';

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App">
      <a href="/" onClick={handleSelect} id="listDemoApp">
        ListDemoApp
      </a>{' '}
      <a href="/" onClick={handleSelect} id="listDemoApp2">
        ListDemoApp2
      </a>{' '}
      &nbsp;
      <a href="/" onClick={handleSelect} id="stateAndEvent">
        State and Event
      </a>{' '}
      <a href="/" onClick={handleSelect} id="clock">
        Clock
      </a>{' '}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  const id = event.target.id;
  switch (id) {
    case 'listDemoApp':
      app = <LDApp />;
      break;
    case 'listDemoApp2':
      app = <LDApp2 />;
      break;
    case 'stateAndEvent':
      app = <SAE />;
      break;
    case 'clock':
      app = <Clock />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
