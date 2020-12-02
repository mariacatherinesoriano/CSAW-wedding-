import React,{useState} from 'react';
import {Link} from "react-router-dom";

const RSVP = () => {
const [firstname,setfirstName] = useState("");
const [diet,setDiet] = useState("");
const [song, setSong] = useState("");
    const handleSubmit = (e) => {
        e.preventdefault();
        firstname("");
        setfirstName("");
        diet("");
        setDiet("");
        song("");
        setSong("");
    console.log()

    }
    return ( 
        <div className="container">
        <form onSubmit={handleSubmit}/>
        <h2>RSVP</h2>
        <div className="input field"/>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname"/>
        <div className="input field" />
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname"/>
        <div className="input field"/>
        <label htmlFor="diet_requirement">Dietary requirements:</label>
        <input type="text" id="diet_requirement"/>
        <div className="input field"/>
        <label htmlFor="email">Email address:</label>
        <input type="text" id="email"/>
        <div className="input field col s12"/>
        <label>Number of adults attending:</label>
        <input type="number"
        min={0}
        max={10}
        step={1}
        />
        <div className="input field col s12"/>
       <label>Number of kids attending:</label>
       <input type="number"
        min={0}
        max={10}
        step={1}
        />
        <div className="input field"/>
        <label htmlFor="song">Request a song:</label>
        <input type="text" id="song"/>
        <div>
            <Link to="/">
                <button>
                    Home
                </button>
            </Link>
            <button type="submit">
            Attending
            </button>
            
         </div>
     </div>
     );
}
 
export default RSVP;
