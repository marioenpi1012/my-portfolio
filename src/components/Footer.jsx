import React from "react";
import {FaLinkedin, FaGithub} from "react-icons/fa"
import styles from '../styles/Footer.module.scss';
import SayHello from "./SayHello";
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <SayHello />
            <div className="footer-line"></div>
            <ul className={styles.links}>
                <li className={styles.link}> 
                    <a 
                        href="https://www.linkedin.com/in/pineda-mario/" 
                        target='_blank'
                        rel="noreferrer"
                        >
                        <FaLinkedin />
                    </a>
                </li>
                <li className={styles.link}>
                    <a 
                        href="https://github.com/marioenpi1012"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <FaGithub />
                    </a>
                </li>
            </ul>
            
        </div>
    )
}

export default Footer
