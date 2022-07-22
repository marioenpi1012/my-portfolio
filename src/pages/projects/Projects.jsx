import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import {Helmet } from 'react-helmet';
import { BsArrowUpRight } from "react-icons/bs";
import Project from '../../components/Project'
import styles from './Projects.module.scss'
import projects from '../../data/data'
import {motion, AnimatePresence} from 'framer-motion/dist/framer-motion'
const Projects = () => {
    const location = useLocation()
    const pageVariants = {
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
    const variants ={
        initial:{
            transform:"translate3d(0,0,0)"
        },
        animate:{
            transform:"translate3d(-25%,0,0)"
        }
    }
    return (
        <motion.div 
            className={styles.Projects}
            variants={pageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            >
            <Helmet>
                <title>Mario Pineda | Projects </title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.paginationContainer}>
                    <div className={styles.pagination}>{location.pathname === '/' ? "02" : "01" }</div>
                    <div className={styles.title}>work</div>
                </div>
                <motion.div className={styles.projects} >
                <AnimatePresence exitBeforeEnter>
                    {
                        projects.map((project,i) =>(
                            location.pathname === '/' ? i < 2 &&
                            <Project project={project} key={i} id={i}/>
                            :<Project project={project} key={i} id={i} />
                        ))
                    }
                </AnimatePresence>
                </motion.div>
            </div>
            {
                location.pathname === '/' &&
                <motion.div 
                className={styles.seeAll}
                initial='initial'
                whileHover='animate'
                >
                <Link to='/projects'>
                    <div className={styles.title}>
                        See all work
                    </div>
                    <motion.div 
                        className={styles.icon}
                        variants={variants}
                        >
                        <BsArrowUpRight />
                    </motion.div>
                </Link>
            </motion.div>
            }
        </motion.div>
    )

}

export default Projects
