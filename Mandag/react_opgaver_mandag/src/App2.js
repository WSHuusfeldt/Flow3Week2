import person from "./file2";
import React from "react";

person.firstName = "Andreas";
person.lastName = "vikke";
function App() {
  return (
    <div className="App2">
      <h1>Rendered</h1>
      <p>
        Firstname: {person.firstName}, Email: {person.email}
      </p>
    </div>
  );
}

export default App;
