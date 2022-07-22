import React from 'react'
import {Helmet} from 'react-helmet'
import pic from '../../assets/images/mario.jpg'
import {NavLink}  from 'react-router-dom'
import styles from './About.module.scss'
import {FaCaretUp} from 'react-icons/fa'
import { motion } from 'framer-motion/dist/framer-motion'
import TopArrow from '../../components/ui/TopArrow'
const About = () => {
    const variants ={
        hidden:{
            opacity:0,
            x:"100%",
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
            }
        }
    }
    return (
        <motion.div 
            className={styles.About}
            initial='hidden'
            whileInView='animate'
            viewport={{margin:'-100% 0px 0% 0px'}}
            >
            <Helmet>
                <title>Mario Pineda | About</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.quote}>
                    <p>
                    Let's work together to create high
                    quality design and an engaging experience.
                    </p>
                </div>
                <div className={styles.paginationContainer}>
                    <div className={styles.pagination}>01</div>
                    <div className={styles.title}>About</div>
                </div>
                <div className={styles.description}>
                    <p>
                        Hi I'm Mario; a Front end developer with 
                        a wide variety of experience.I like to always
                        challenge myself with things that interested me
                        and can add a value to myself
                        
                    </p>
                </div>
                <div className={styles.aboutPage}>

                </div>
            </div>
        </motion.div>
    )
}

export default About
