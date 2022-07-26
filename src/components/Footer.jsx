import React from "react";
import {FaLinkedin, FaGithub} from "react-icons/fa"
import styles from '../styles/Footer.module.scss';
import SayHello from "./SayHello";
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <SayHello />
            <div className="footer-line"></div>
            <ul className={styles.links}>
                <motion.li 
                    className={styles.link}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    > 
                    <a 
                        href="https://www.linkedin.com/in/pineda-mario/" 
                        target='_blank'
                        rel="noreferrer"
                        >
                        <FaLinkedin />
                    </a>
                </motion.li>
                <motion.li 
                    className={styles.link}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    >
                    <a 
                        href="https://github.com/marioenpi1012"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <FaGithub />
                    </a>
                </motion.li>
            </ul>
            
        </div>
    )
}

export default Footer
