import React from 'react'
import {motion} from 'framer-motion';
import {FaCaretUp} from 'react-icons/fa'
import styles from '../../styles/TopArrow.module.scss'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)
const TopArrow = ({show}) => {
    const topArrowVariants ={
        initial:{
            opacity:0,
            transform:`translate3d(100px, 0, 0)`,
            transformStyle:'preserve-3d',
            willChange:'transform',
        },
        show:{
            opacity:1,
            transform:`translate3d(0%, 0, 0)`,
            transformStyle:'preserve-3d',
            willChange:'transform',
            transition:{
                duration:1,
            }
        }
    }
    const handleClick = () =>{
        gsap.to(window, {duration:1, scrollTo:{y:0}})
    }
    return (
        <motion.div  
            variants={topArrowVariants}
            initial='initial'
            animate={show ? 'show': 'initial'}
            className={styles.topArrow}
            onClick={handleClick}
            transition={{duration:1}}
            >
            <FaCaretUp />
            </motion.div>
    )
}

export default TopArrow