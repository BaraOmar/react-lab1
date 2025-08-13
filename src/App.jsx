import React, { useState } from 'react'
import ContactForm from './ContactForm';
import ContactList from './ContactList';

// import './App.css'

function App() {

  const [person, setPerson] = useState("");

  const addPerson = (newPerson)=>{
    setPerson(newPerson)
  }

  return (
    <>
    <ContactForm addPerson={addPerson}/>
    <ContactList person={person}/>
    </>
  )
}

export default App
