import {Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'

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
        <div>
            <Helmet>
                <title>My Portfolio | Contact Me</title>
            </Helmet>
            
            <div className="contactForm">
                <h1 id='formTitle'>Contact Me</h1>
                <form onSubmit={sendEmail} id='form' onChange={validation}>
                    <input type="text" placeholder='Your Name' name='name' required/>
                    <input type="text" placeholder='Your Email' name='email' required/>
                    <textarea type="text" placeholder='Message' name='message' required/>
                    <input type="submit" className='btn'/>
                </form>
            </div>
        </div>
    )
}

export default Contact
