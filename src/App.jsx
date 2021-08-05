import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SubmitBtn from "./Button/SubmitBtn"
import Textbox from "./Textbox/Textbox";
import Feild from "./Feild/Feild";
import './App.css';
import img from './logo.jpeg'



const App = () => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [Email, setEmail] = useState('');
    const [Adress, setAdress] = useState('');
    const [message, setMessage] = useState('');
    const userDetails = { name: name, phone: phoneNum, email: Email, adress: Adress }

    const resetState = () => {
        setName("");
        setPhoneNum("");
        setEmail("");
        setAdress("");
    }



    return (
        <>
            <h1 className="header">Add Contact</h1>
            <p className="Msg"  >{message}</p>
            <div className="lbl">
                <Feild feildName="Name" required={true} />
                <Textbox inputName="Your Name" setValue={setName} state={name} required="required" />
                <Feild feildName="Phone No" required={true} />
                <Textbox inputName="Your Phone No" setValue={setPhoneNum} state={phoneNum} required="required" />
                <Feild feildName="E-mail " required={true} />
                <Textbox inputName="Your E-mail" setValue={setEmail} state={Email} required="required" />
                <Feild feildName="Address" />
                <Textbox inputName="Your Address" setValue={setAdress} state={Adress} required={null} />
            </div>
            <div className="btn">
                <SubmitBtn buttonName="Submit" uDetails={userDetails} resetState={resetState} setMessage={setMessage} />
            </div>
        </>
    );
}

export default App;