import axios from 'axios';
import React, {useState} from 'react';

const AddContact = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

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

        axios
          .post('http://localhost:3021/persons', contactObject)
          .then(response => {
            console.log(response);
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