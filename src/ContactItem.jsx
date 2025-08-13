import React from 'react';

function ContactItem({ person, deletePerson }) {
  return (
    <li style={{ marginBottom: '10px' }}>
     {person.name} - {person.email}
      <button onClick={deletePerson} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;