import React, {useState} from 'react';
import contactService from '../services/contacts';

const AddContact = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addContact = (event) => {
        event.preventDefault();
        const contactObject = {
            name: newName, 
            number: newNumber,
        }

        contactService
          .create(contactObject)
          .then(response => {
            console.log(response);

            if (!(persons.find(person => person.name === contactObject.name))) {
              setPersons(persons.concat(contactObject));
              setNewName('');
              setNewNumber('');
            } else {
              return alert(`${contactObject.name} is already added to phonebook`);
            }
          })
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
    );
}

export default AddContact;