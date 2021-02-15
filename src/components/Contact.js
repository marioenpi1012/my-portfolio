import {Helmet } from 'react-helmet'
const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>My Portfolio | Contact Me</title>
            </Helmet>
            
            <div className="contactForm">
                <h1 id='formTitle'>Contact Me</h1>
                <form action="" id='form'>
                    <input type="text" placeholder='Your Name' name='name'/>
                    <input type="text" placeholder='Your Email' name='email'/>
                    <textarea type="text" placeholder='Message' name='message'/>
                </form>
            </div>
        </div>
    )
}

export default Contact
