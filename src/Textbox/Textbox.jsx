
import React, { useEffect, useState } from "react";
import "./Textbox.css";


const Textbox = (props) => {
    useEffect(() => {
        console.log('text box rendered');
    })


    return (
        <div>
            <input placeholder={props.inputName} required={props.required} value={props.state} onChange={(e) => {
                props.setValue(e.target.value);
            }}></input>

        </div >

    );
}

export default Textbox;