import React from 'react';
import PropTypes from 'prop-types';

const PeopleList = ({ people, deletePerson, editPerson }) => {
  return (
    <React.Fragment>
      <h2>All People</h2>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <a href="#/" onClick={e => deletePerson(person.id)}>
              {' '}
              (delete{' '}
            </a>
            <a href="#/" onClick={() => editPerson(person.id)}>
              , edit){' '}
            </a>
          </tr>
        ))}
      </tbody>
    </React.Fragment>
  );
};
export default PeopleList;

PeopleList.propTypes = {
  people: PropTypes.array
};
