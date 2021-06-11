import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '212-212-2122'}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const peopleList = persons.map((person) => 
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  );

  const addContact = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newName, 
      number: newNumber,
    }

    if (!(persons.find(person => person.name === contactObject.name))) {
      setPersons(persons.concat(contactObject));
      setNewName('');
      setNewNumber('');
    } else {
      return alert(`${contactObject.name} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleNameChange}
            />
        </div>
        <div>
          number: 
            <input 
              value={newNumber}
              onChange={handleNumberChange}
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
