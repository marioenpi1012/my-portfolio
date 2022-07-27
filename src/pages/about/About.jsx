import React from 'react'
import {Helmet} from 'react-helmet'
import styles from './About.module.scss'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Mario from '../../assets/images/mario.jpg'
import Pagination from '../../components/ui/Pagination'
import Skills from '../../components/ui/Skill'
import Quote from '../../components/ui/Quote'
const About = ({},ref) => {
    const location = useLocation()
    const leftVariants = {
        hidden:{
            opacity:0,
            x:'-100px'
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
            }
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
            ref={ref}
            className={location.pathname === '/about' ? `${styles.About} ${styles.AboutPage}` :styles.About}
            >
            <Helmet>
                <title>Mario Pineda | About</title>
            </Helmet>
            <div className={styles.container}>
                {location.pathname === '/' && <Quote />}
                <Pagination number='01' title='about' />
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
                {
                    location.pathname === '/about' &&
                    <div className={styles.aboutPage}>
                        <div className={styles.aboutWrapper}>
                            <motion.div 
                                className={styles.image}
                                variants={leftVariants}
                                initial='hidden'
                                whileInView='animate'
                                viewport={{once:false, amount:0.8}}
                                transition={{duration:1}}
                                >
                                <img src={Mario} alt="" />
                            </motion.div>
                            <motion.div 
                                className={styles.description}
                                variants={rightVariants}
                                initial='hidden'
                                whileInView='animate'
                                viewport={{once:false,amount:0.8}}
                                transition={{duration:1}}
                                >
                                <p>
                                    As a front-end developer, I'm extremely interested in learning and excelling at new technologies, 
                                    and I've demonstrated my skills in this area through the projects I build shown in my portfolio. 
                                    I've mastered programs and languages ranging from HTML to JavaScript, 
                                    and I look forward to mastering more programs as they're developed. 
                                    I'm also interested in problem-solving, a skill
                                    I developed while learning and utilizing my front-end developer skills.
                                </p>
                                </motion.div>
                        </div>
                        <Skills />
                    </div>
                }

            </div>
        </div>
    )
}

export default React.forwardRef(About);
