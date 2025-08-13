import React, { useState } from 'react'
import ContactForm from './ContactForm';
import ContactList from './ContactList';

// import './App.css'

function App() {

  const [person, setPerson] = useState([]);

  const addPerson = (newPerson) => {
    setPerson([...person, newPerson])
  }

  const deletePerson = (index) => {
    setPerson(person => person.filter((_, i) => i !== index));
  };


  return (
    <>
      <ContactForm addPerson={addPerson} />
      <ContactList person={person} deletePerson={deletePerson} />
    </>
  )
}


export default App;

