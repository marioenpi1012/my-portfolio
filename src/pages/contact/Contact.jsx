import {Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'
import React from 'react';
import styles from './Contact.module.scss'
import { motion } from 'framer-motion'
import Pagination from '../../components/ui/Pagination';
import AnimatedPage from '../../components/ui/AnimatedPage';
import Quote from '../../components/ui/Quote';
const Contact = () => {
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
    const quote = "Let's Work Together and Create Something Meaningful!"
    return (
        <AnimatedPage >
            <div 
                className={styles.Contact}
                >
                <Helmet>
                    <title>Mario Pineda | Contact Me</title>
                </Helmet>
                <div className={styles.container}>
                    <Pagination number='01' title='Hit Me' />
                    <Quote className={styles.contactQuote} quote={quote} />
                    <form className={styles.form} onSubmit={sendEmail} id='form' >
                        <div className={styles.name}>
                            <input 
                                type="text"
                                name='name' 
                                required
                                />
                            <label className={styles.textInputLabel} htmlFor="name">
                                <span>
                                    Name
                                </span>
                            </label>
                            
                        </div>
                        <div className={styles.email}>
                            <input 
                                type="text" 
                                name='email' required/>
                            <label htmlFor="email" className={styles.textInputLabel}>
                                <span>
                                    Email
                                </span>
                            </label>
                        </div>
                        <div className={styles.message}>
                            <textarea 
                                type="text"  
                                name='message' 
                                required
                            />
                            <label htmlFor="message" className={styles.textareaLabel}>
                                <span>
                                    Message
                                </span>
                            </label>
                        </div>
                        <motion.input
                            type="submit" 
                            className={styles.submitBtn}
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            />
                    </form>
                </div>
            </div>
        </AnimatedPage>

    )
}

export default Contact
