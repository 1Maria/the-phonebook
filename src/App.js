import React, { useState } from 'react';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '212-212-2122' }, 
    { name: 'Ada Lovelace', number: '39-44-5323523' }, 
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

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

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  const searchResults = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with  
          <input
            value={search}
            onChange={handleSearchChange}
          />
      </div>
      <h2>add a new</h2>
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
      <div>
          {searchResults.map(search => 
           <Search key={search.name} search={search} />)}
      </div>
    </div>
  );
}

export default App;
