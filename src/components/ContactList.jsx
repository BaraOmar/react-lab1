import React from 'react';
import ContactItem from './ContactItem'; 
import './ContactList.css';

function ContactList({ person , deletePerson }) {
    // console.log(person);

    if (person) {
        return (
            <ul className="contact-list">
          {person.map((person, index) => (
            <ContactItem 
            key={index} 
            person={person} 
            deletePerson={() => deletePerson(index)}/>
          ))}
        </ul>
        )

    } else {
        return <p>No Contacts yet.</p>;
    }

}

export default ContactList;
