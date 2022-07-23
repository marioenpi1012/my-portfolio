import React, { useEffect, useRef, useState } from 'react'
import Mario from '../../assets/images/mario.jpg'
import {NavLink}  from 'react-router-dom'
import styles from './Home.module.scss'
import {motion} from 'framer-motion/dist/framer-motion'
import About from '../about/About'
import Projects from '../projects/Projects'
import TopArrow from '../../components/ui/TopArrow'
import { useInView } from 'framer-motion/dist/framer-motion'
import SayHello from '../../components/SayHello'
const Home = () => {
    const click = () =>{
        // window.scrollBy(0, `${aboutRef.current.clientHeight}`)
        window.scrollBy(0, `${window.innerHeight}`)
    }
    const variants={
        initial:{
            opacity:1,
        },
        animate:{
            opacity:1
        },
        exit:{
            opacity:0
        }
    }
    return (
        <>
        <motion.div 
            className={styles.Home}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration:1}}
            >
            <div className={styles.introContainer}>
                <div className={styles.image}>
                    <img src={Mario} alt="" width='100px' height='100px'/>
                </div>
                <div className={styles.introduction}>
                    <p>
                        Hi, I'm Mario Pineda, 
                    </p>
                    <p>
                        A Front end developer.
                    </p>
                    {
                    //     <NavLink to='/projects' >
                    // <input type="button" value="My Projects"
                    // />
                    // </NavLink>
                }
                </div>
                
            </div>
            <div className={styles.scrollDown} onClick={click}>
                <div className={styles.mouse}>
                    <div className={styles.scroller}></div>
                </div>
            </div>
        </motion.div>
        <About />
        <Projects/>
        </>
    )
}


export default Home
