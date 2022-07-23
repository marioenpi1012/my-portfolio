import React from 'react'
import {Helmet} from 'react-helmet'
import styles from './About.module.scss'
import { motion } from 'framer-motion'
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
        <div 
            className={styles.About}
            >
            <Helmet>
                <title>Mario Pineda | About</title>
            </Helmet>
            <div className={styles.container}>
                <motion.div 
                    className={styles.quote}
                    variants={leftVariants}
                    initial='hidden'
                    whileInView='animate'
                    viewport={{once:false, amount:0.5}}
                    transition={{duration:1}}
                    >
                    <p>
                    Let's work together to create high
                    quality design and an engaging experience.
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.paginationContainer}
                    variants={variants}
                    initial='hidden'
                    whileInView='animate'
                    transition={{duration:1}}
                    viewport={{once:false, amount:1}}
                    >
                    <div className={styles.pagination}>01</div>
                    <div className={styles.title}>About</div>
                </motion.div>
                <motion.div 
                    className={styles.description}
                    variants={rightVariants}
                    initial='hidden'
                    whileInView='animate'
                    transition={{duration:1}}
                    viewport={{amount:0.8, once:false}}
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
        </div>
    )
}

export default About
