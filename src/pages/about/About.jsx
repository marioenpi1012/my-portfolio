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
            scale:0.5,
        },
        animate:{
            opacity:1,
            scale:1,
        }
    }
    const leftVariants = {
        hidden:{
            opacity:0,
            x:'-100px'
        },
        animate:{
            opacity:1,
            x:0,
        }
    }
    const rightVariants = {
        hidden:{
            opacity:0,
            x:'100px'
        },
        animate:{
            opacity:1,
            x:0,
        }
    }
    return (
        <motion.div 
            className={styles.About}
            initial='hidden'
            whileInView='animate'
            viewport={{once:false}}
            transition={{amount:0.8, duration:1}}
            >
            <Helmet>
                <title>Mario Pineda | About</title>
            </Helmet>
            <div className={styles.container}>
                <motion.div 
                    className={styles.quote}
                    variants={leftVariants}
                    >
                    <p>
                    Let's work together to create high
                    quality design and an engaging experience.
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.paginationContainer}
                    variants={variants}
                    >
                    <div className={styles.pagination}>01</div>
                    <div className={styles.title}>About</div>
                </motion.div>
                <motion.div 
                    className={styles.description}
                    variants={rightVariants}
                    >
                    <p>
                        Hi I'm Mario; a Front end developer with 
                        a wide variety of experience.I like to always
                        challenge myself with things that interested me
                        and can add a value to myself
                        
                    </p>
                </motion.div>
                <div className={styles.aboutPage}>

                </div>
            </div>
        </motion.div>
    )
}

export default About
