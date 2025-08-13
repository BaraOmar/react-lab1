import React from 'react';

function ContactList({ person }) {
    // console.log(person);
    let content;

    if (person) {
        content =(<ul>
            {/* <ContactItem person={person}/> */}
        </ul>)

    } else {
        content = <p>No Contacts yet.</p>;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>Contacts</h1>
            {content}
        </div>
    );
}

export default ContactList;
