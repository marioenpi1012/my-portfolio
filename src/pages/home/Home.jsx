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

    const [show,setShow] = useState(false)
    const [lastYPos, setLastYPos] = useState(0)
    const ref = useRef(null)
    const aboutRef = useRef()
    const isInView = useInView(aboutRef,{once:true,amount:0.75})
    useEffect(()=>{
        console.log({isInView})
        window.onscroll = showFunction


    },[lastYPos])
    const showFunction = () =>{
        const yPos = window.scrollY;
        const isScrollingDown = yPos > lastYPos;
        setLastYPos(yPos)
        if(isInView){
            if(isScrollingDown){
                setShow(true)
            }else{
                setShow(false)
            }
        }else if(!isInView){
            if(isScrollingDown){
                setShow(true)
            }else{
                setShow(false)
            }
        }
    }
    
        
    const click = () =>{
        window.scrollBy(0, `${aboutRef.current.clientHeight}`)
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
        <div ref={aboutRef}>
            <About />
        </div>
        <Projects/>
        <TopArrow show={show} />
        </>
    )
}


export default Home
