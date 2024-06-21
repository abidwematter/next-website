import React, { Fragment, useState } from 'react';
import axios from 'axios';

const NewsFormTwo = () => {
    const [newsletter, setNewsletter] = useState({
        email: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    
    const onTextFieldChange = (e) => {
        setNewsletter({
            ...newsletter,
            [e.target.name]: e.target.value
        });

        // Clear error message and border color when input changes
        setErrorMessage('');
        document.getElementById("email").style.borderColor = "#F8F9FA";
    }
    async function Clear() {
        setNewsletter({email:''})

    }
    
    const onFormSubmit = async (e) => {
        e.preventDefault();
       // document.getElementById("email").style.borderColor = "#F8F9FA";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!newsletter.email) {
            setErrorMessage("Please provide an email address.");
            document.getElementById("email").style.borderColor = "red";
        } else if (!emailPattern.test(newsletter.email)) {
            setErrorMessage("Please provide a valid email address.");
            document.getElementById("email").style.borderColor = "red";
        } else {
            try {
                const formData = new FormData();
                formData.append('email', newsletter.email);

                const response = await axios.post(`https://api.we-matter.com/Api/subscribe_form/`, formData);
                
                document.getElementById("newsucc_message").style.display = "block";
                document.getElementById("alert_messages").innerHTML = "We received your request. We'll get back to you soon.!!";
                
                
                
                

            } catch (error) {
                console.error("Error submitting form:", error);
                setErrorMessage("Something went wrong. Please try again later.");
                
            }
        }
    }

    return (
        <Fragment>
            <div id="newsucc_message" style={{ color: 'green' }}>
                <div id="alert_messages"></div>
            </div>
            
            <form action="#">
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={newsletter.email}
                    onChange={onTextFieldChange}
                />
                <button onClick={onFormSubmit}>Sign Up</button>
            </form>
            
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </Fragment>
    );
};

export default NewsFormTwo;
