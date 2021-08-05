import React from "react";
import "./Feild.css";


const Feild = (props) => {
    if (props.required === true)
        return (
            <p>{props.feildName} <span>*</span> </p>



        );
    else {
        return (
            <p>{props.feildName} </p>



        );
    }
}

export default Feild;