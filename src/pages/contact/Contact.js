import {Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'
import React from 'react';
const Contact = () => {
    function validation(){

    }
    function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_2qiqeln', 'template_gwccvxo', e.target, 'user_I1AkK85L0I5ZLSeHrIYD6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    } 

    return (
        <div className='contact'>
            <Helmet>
                <title>Mario Pineda | Contact Me</title>
            </Helmet>
            
            <div className="contactForm">
                <h1 id='formTitle'>Get in Touch</h1>
                <div className="line"></div>
                <p id='subtitle'>Let's Work Together and Create Something Meaningful!</p>
                <form onSubmit={sendEmail} id='form' onChange={validation}>
                    <input type="text" placeholder='Your Name' name='name' required/>
                    <input type="text" placeholder='Your Email' name='email' required/>
                    <textarea type="text" placeholder='Message' name='message' id='textArea' required/>
                    <input type="submit" className='contactFormSubmitBtn'/>
                </form>
            </div>
        </div>
    )
}

export default Contact
