import React, { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');
  function handleChange(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setName({ ...name, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.alert(JSON.stringify(name));
  }

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" id="name" onChange={handleChange} />
        </label>
        <button type="submit" value="Submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {JSON.stringify(name)}
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
