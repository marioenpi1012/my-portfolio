import React, {useEffect} from 'react'
import {NavLink}  from 'react-router-dom'
import {FaBars, FaTimes, FaLinkedin} from 'react-icons/fa'
import {useState} from 'react'
import styles from '../styles/Nav.module.scss'
import {motion} from 'framer-motion/dist/framer-motion'
const Navbar = () => {
    const [close, setClose] = useState(true)
    useEffect(()=>{
        if(close){
            document.querySelector('body').style.overflow ='unset'
            console.log(close)
            
        }else{
            document.querySelector('body').style.overflow ='hidden'
        }
    },[close])
    const ulVariants = {
        closed:{
            transition:{staggerChildren:0.05,staggerDirection:-1}
        },
        open:{
            transition:{staggerChildren:0.07, delayChildren:0.2}
        }
    }
    const liVariants = {
        closed:{
            y:50,
            opacity:0,
            transition:{
                y:{
                    stiffness:1000
                }
            }
        },
        open:{
            y:0,
            opacity:1,
            transition:{
                y:{
                    stiffness:1000,
                    velocity:-100
                }
            }
        },
        
    }
    const variants ={
        hidden:{
            // opacity:0,
            // y:'10px'
        },
        animate:{
            opacity:1,
            y:0,
            transition:{duration:0.7}
        }
    }

    return (
        <div className={styles.navContainer}>
            <nav className={styles.navbar}>
                <div className={styles.leftNav}>
                    <NavLink to='/' className={close ? styles.name : `${styles.name} ${styles.color}`}>Mario Pineda</NavLink>
                </div>
                
                <motion.div 
                    className={close ? styles.menuToggle : `${styles.menuToggle} ${styles.menuOpen}`}
                    onClick={()=> setClose(!close)}
                >
                    <div 
                        className={close ? styles.menu : `${styles.menu } ${styles.background}`}
                    >
                    </div>
                </motion.div>
                <div className={close ? styles.navLinks : `${styles.navLinks} ${styles.navOpen}`} >
                    <motion.ul
                        variants={ulVariants}
                        animate={close ? 'closed' : 'open'}
                    >
                        <motion.li
                            variants={liVariants}
                            onClick={()=>setClose(!close)}
                        >
                            <motion.div
                                initial='hidden'
                                whileHover='animate'
                            >
                            <NavLink to='/'>Home</NavLink>
                            <motion.p
                                className={styles.subtitle}
                                variants={variants}
                                >
                                Not place like home
                            </motion.p>
                            </motion.div>

                        </motion.li>
                        <motion.li
                            variants={liVariants}
                            onClick={()=>setClose(!close)}
                        > 
                            <motion.div initial='hidden' whileHover='animate'>
                                <NavLink to='/about' >About</NavLink>
                                <motion.p
                                className={styles.subtitle}
                                variants={variants}
                                >
                                    A story about me
                                </motion.p>
                            </motion.div>            
                        </motion.li>
                        <motion.li
                            variants={liVariants}
                            onClick={()=>setClose(!close)}
                        >
                            <motion.div initial='hidden' whileHover='animate'>
                                <NavLink to='/projects' >Projects</NavLink>
                                <motion.p
                                className={styles.subtitle}
                                variants={variants}
                                >
                                    My practical experience
                                </motion.p>
                            </motion.div>            
                        </motion.li>
                        <motion.li
                            variants={liVariants}
                            onClick={()=>setClose(!close)}
                        >
                            <motion.div  initial='hidden' whileHover='animate'>
                                <NavLink to='/contact' >Contact</NavLink>
                                <motion.p
                                className={styles.subtitle}
                                variants={variants}
                                >
                                    Stay in touch!
                                </motion.p>
                            </motion.div>                        
                        </motion.li>
                    </motion.ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar
