import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import AddContact from './components/AddContact';
import contactService from './services/contacts';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('effect');
    contactService
      .getAll()
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
      })
  }, []);

  console.log('render', persons.length, 'persons');

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
