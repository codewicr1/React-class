import React, { useState } from 'react'
import "./App.css"

function RenderPerson(props) {
    return (
        <div>
            <p>{props.name} - {props.email}</p>
            <button onClick={props.deleteHandler}>Remove</button>
        </div>)
}

const initialContacts = [
    {
        id: 0,
        name: "Constance",
        email: "connie.connie.com"
    },
    {
        id: 1,
        name: "Sharon",
        email: "sharon.sharon.com"
    },
    {
        id: 2,
        name: "Benny",
        email: "benny.benny.com"
    },
];
export default function App() {//let addNameTxt = ""
    const [searchTxt, setSearchTxt] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contacts, setContacts] = useState(initialContacts);
    const sortHandler = () => {
        let copyContacts = [...contacts]
        contacts.sort((x, y) => x.name.localeCompare(y.name));
        setContacts(copyContacts);
    }

    const addHandler = () => {
        if (name === "" || email === "") {
            return ("both fields must be filled");


        }
        // search text and check/change it
        const validateEmailRegex = /^\S+@\S+\.\S+$/;
        const isValidEmail = validateEmailRegex.test(email);
        if (!isValidEmail) {
            return alert("invalid email");

        }
        setContacts([...contacts, {
            id: Math.random(),
            name: name,
            email: email,
        }])
        setName("");
        setEmail("");
    }
    const deleteHandler = (id) => {
        // let up = a.filter(a => a.id !==2);
        let up = contacts.filter(a => a.id !== id);
        setContacts(up);

    }
    const filtered = contacts.filter(item => {

        return item.name.includes(searchTxt)
        
    });
console.log (filtered)

    return (
        <div className='container'>
            <h2>Contact Search</h2>
            <input
                placeholder='search'
                type="text"
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
            />
            <button onClick={sortHandler} >Sort A-Z</button>
            {/* ADD INFO SECTION*/}

            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

            </label>
            <label>Enter your email:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <input />
            <button className="btn" onClick={addHandler}>ADD</button>
            {/*SHOW DATA*/}
            {filtered.map((person, index) => <RenderPerson
                key={person.id}
                name={person.name}
                email={person.email}
                deleteHandler={() => deleteHandler(person.id)}
            />)}
        </div>
    )
}
