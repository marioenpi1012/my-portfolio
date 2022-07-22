import React from 'react'
import {NavLink}  from 'react-router-dom'
import {FaBars, FaTimes, FaLinkedin} from 'react-icons/fa'
import {useState} from 'react'
import styles from '../styles/Nav.module.scss'
import {motion} from 'framer-motion/dist/framer-motion'
const Navbar = () => {
    const [close, setClose] = useState(true)

    const onClick = () =>{
        const navLinks = document.querySelectorAll('.nav-links')
        console.log('click working')
        setClose(!close)
        console.log(close)
        if(!close){
            navLinks.forEach(nav =>{
                nav.style.display = 'none'
            })
        }else{
            navLinks.forEach(nav =>{
                nav.style.display = 'block'
            })
            
            console.log('open')
        }
    }

    const Path = props =>(
        <motion.path
            fill='transparent'
            strokeWidth='3'
            // stroke='hsl(0, 0%,18%)'
            stroke='white'
            strokeLineCap='round'
            transition={{duration: 5}}
            {...props}
        />
    )
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
            opacity:0,
            y:'10px'
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
                    // initial={true}
                    onClick={()=> setClose(!close)}
                    // animate={close ? 'closed' : 'open'}
                    // transition={{duration:5}}
                >
                    <div 
                        className={close ? styles.menu : `${styles.menu } ${styles.background}`}
                    >
                { 
                    //  <svg width='26' height='26' viewBox='0 0 26 26'>
                    //     <Path 
                    //         variants={{
                    //             closed: { d: "M 0 3 L 10 3" },
                    //             open: { d: "M 0 3 L 10 13" }
                    //             // open:{d:"M 10 13 L 0 3"}
                    //         }} 
                    //         transition={{duration:7}}
                    //     />
                    //     <Path
                    //         variants={{
                    //         closed: {d:"M 0 13 L 20 13"},
                    //         open: { d:"M 0 23 L 20 3"}
                    //         }}
                    //         // transition={{ duration: 0.1 }}
                    //     />
                    //     <Path
                    //         variants={{
                    //         closed: { d: "M 10 23 L 20 23" },
                    //         // open: { d: "M 20 23 L 10 13" }
                    //         open:{d:"M 10 13 L 20 23"}
                    //         }}
                    //     />
                    // </svg>
                }
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
                            // initial='hidden'
                            // whileHover='animate'
                            // exit='hidden'
                            // whileHover={{opacity:1, y:0, transition:{duration:1}}}
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
                                <NavLink to='/about'  activeClassName={styles.currentLocation}>About</NavLink>
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
                                <NavLink to='/projects' activeClassName={styles.currentLocation}>Projects</NavLink>
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
                                <NavLink to='/contact' activeClassName={styles.currentLocation}>Contact</NavLink>
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
