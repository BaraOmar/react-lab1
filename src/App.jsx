import React, { useState } from 'react'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

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
    <div className="app-container">
      <ContactForm addPerson={addPerson} />
      <ContactList person={person} deletePerson={deletePerson} />
    </div>
  );
}


export default App;

