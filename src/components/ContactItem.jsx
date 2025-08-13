import React from 'react';
import './ContactItem.css';

function ContactItem({ person, deletePerson }) {
  return (
    <li className="contact-item">
     <span>{person.name} - {person.email}</span>
      <button onClick={deletePerson} className="btn delete-btn">
        Delete
      </button>
    </li>
  );
}

export default ContactItem;