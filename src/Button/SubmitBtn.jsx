import React from "react";
import './Button.css';


const SubmitBtn = (props) => {
    function handleSubmit() {
        if (props.uDetails.name === '') { props.setMessage('name is required') }
        else if (props.uDetails.phone === '') { props.setMessage('phone is required') }
        else if (props.uDetails.email === '') { props.setMessage('emai is required') }

        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(props.uDetails)
            };
            fetch('http://localhost:8000/user', requestOptions)
                .then(response => response.json())
                .then(data => { console.log(data); props.resetState(); props.setMessage('') });
        }
    }

    return (
        <button onClick={handleSubmit} className="button">{props.buttonName}</button>



    );
}
export default SubmitBtn;