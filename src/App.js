import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import AddContact from './components/AddContact';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '212-212-2122' }, 
    { name: 'Ada Lovelace', number: '39-44-5323523' }, 
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  const searchResults = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

  return (
    <div>
      <Header name='Phonebook' />
      <div>
        filter shown with  
          <input
            value={search}
            onChange={handleSearchChange}
          />
      </div>
      <Header name='add a new' />
      <AddContact persons={persons} setPersons={setPersons} />
      <Header name='Numbers' />
      <div>
          {searchResults.map(search => 
           <Search key={search.name} search={search} />)}
      </div>
    </div>
  );
}

export default App;
