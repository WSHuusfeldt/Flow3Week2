import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleList from './PeopleList';
import NewPerson from './NewPerson';
import uuid from 'uuid/v1';

function App() {
  const initialData = [
    { id: uuid(), name: 'Asger' },
    { id: uuid(), name: 'Andreas' },
    { id: uuid(), name: 'Martin' }
  ];
  const [people, setPeople] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: '', name: '' });
  console.log(people);

  const addPerson = person => {
    if (person.id === '') {
      // id=-1 Indicates a new object
      person.id = uuid();
      people.push(person);
    } else {
      //if id != "", it's an existing todo. Find it and add changes
      let personToEdit = people.find(p => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPeople([...people]);
    setNewPerson({ id: '', name: '' });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: 'center', marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <PeopleList people={people} />
        </div>
        <div className="col-5 new-todo">
          <NewPerson addPerson={addPerson} nextPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}
export default App;
