import React, { useState } from 'react'
import ContactForm from './ContactForm';

// import './App.css'

function App() {

  const [person, setPerson] = useState("");

  const addPerson = (newPerson)=>{
    setPerson(newPerson)
  }

  return (
    <ContactForm addPerson={addPerson}/>
  )
}

export default App
