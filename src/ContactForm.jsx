import React, { useState } from 'react'

function ContactForm({addPerson}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



    const handleSubmit = (evt)=>{
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
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />

            <h1>Add a Person</h1>
            <form onSubmit={handleSubmit}>
                
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>




        </div>
    )
}

export default ContactForm;