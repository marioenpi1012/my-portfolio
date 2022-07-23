import React from 'react'
import styles from '../../styles/Loading.module.scss'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
const Loading = () => {
    const variants = {
        start:{
            y:'50%',
            pathLength:0,
            opacity:0
        },
        animate:{
            y:'0%',
            pathLength:1,
            opacity:1,
            transition:{
                duration:2,
                delay:2,
                yoyo:1,
                repeatDelay:2
            }
            ,
            
            transitionEnd:{

            }
        }
    }
    const leftTextVariants={
        start:{
            opacity:1,
            x:0
        },
        animate:{
            opacity:0,
            x:10,
            transition:{
                type: '' ,
                duration:1,
                delay:5
            }
        }
    }
    const rightTextVariants={
        start:{
            opacity:1,
            x:0
        },
        animate:{
            opacity:0,
            x:-10,
            transition:{
                type: '' ,
                duration:1,
                delay:5
            }
        }
    }
    const pageVariants = {
        initial:{
            opacity:1
        },
        animate:{
            opacity:1
        },
        end:{
            opacity:0,
        }
    }
    const location = useLocation()
    console.log(location)
    return (
        <motion.div 
            className={styles.Loading}
            variants={pageVariants}
            initial='initial'
            animate='animate'
            exit='end'
            transition={{duration:1}}
            >
            <div className={styles.container}>
                <motion.span
                    variants={leftTextVariants}
                    initial='start'
                    animate='animate'
                >Mario
                </motion.span> 
                <motion.svg 
                    width='10'
                    height='40'
                    initial='start'
                    animate='animate'
                    >
                        <motion.line
                            className={styles.line}
                            x1='50%'
                            y1='0'
                            x2='50%'
                            y2='100%'
                            variants={variants}
                            stroke='#ff0055'
                        />
                </motion.svg>
                <motion.span
                    variants={rightTextVariants}
                    initial='start'
                    animate='animate'
                >
                    Pineda
                </motion.span>
                
            </div>
        </motion.div>
    )
}

export default Loading
