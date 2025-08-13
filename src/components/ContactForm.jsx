import React, { useState } from 'react'
import './ContactForm.css'; 

function ContactForm({ addPerson }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newPerson = {
            name,
            email
        }
        // console.log(newPerson);

        setName("");
        setEmail("");

        addPerson(newPerson);

    }


    return (
        <div className="contact-form">
            {/* <hr style={{ margin: "30px 0" }} /> */}

            <h1>Add a Person</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginLeft: "10px" }}
                    />
                </div>

                <button type="submit" className="btn">
                    Add Person
                </button>
            </form>




        </div>
    )
}

export default ContactForm;