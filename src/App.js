import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }//, {name: 'Minnie Mouse'}
  ]);
  const [newName, setNewName] = useState('');

  const peopleList = persons.map((person) => 
    <div key={person.id}>
      {person.name}
    </div>
  );

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName, 
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject));
    setNewName('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleNameChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{peopleList}</div>
    </div>
  );
}

export default App;
