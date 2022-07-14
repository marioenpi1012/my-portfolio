import React, { useEffect, useState } from 'react'
import Mario from '../../assets/images/mario.jpg'
import {NavLink}  from 'react-router-dom'
import Loading from '../../components/ui/Loading'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 9000);
    },[])
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
        <AnimatePresence exitBeforeEnter>
            { loading && <Loading key='loading' />}
        </AnimatePresence>
        <motion.div 
            id='body' 
            className='body'
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration:1}}
            >
            <div className="intro-container">
                <div className="introduction">
                    <p>Hi,</p>
                    <p>I'm Mario</p>
                    <p>A Front End Developer</p>
                    <NavLink to='/projects' >
                    <input type="button" value="My Projects"
                    />
                    </NavLink>
                </div>
                <div className="image">
                    <img src={Mario} alt="" width='100px' height='100px'/>
                </div>
            </div>
        </motion.div>
        </>
    )
}


export default Home
