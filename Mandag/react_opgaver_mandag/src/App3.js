import React from "react";
import PropTypes from "prop-types";
import Person, { names } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  return (
    <div>
      <h1>Firstname: {props.Person.firstName}</h1>
      <h1>Lastname: {props.Person.lastName}</h1>
      <h1>Email: {props.Person.email}</h1>
      <h1>---</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <h1>-----------------</h1>
      <Welcome />
      <Welcome name={32} />
      <h1>-----------------</h1>

      {names.map((person, index) => (
        <WelcomePerson key={index} Person={person} />
      ))}
    </div>
  );
}
//I konsollen vil man kunne se fejlen.

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

//Er usikker på det er rigtigt
WelcomePerson.propTypes = {
  Person:
    PropTypes.element.isRequired &&
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
};

export default App;
