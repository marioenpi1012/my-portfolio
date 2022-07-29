import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import {Helmet } from 'react-helmet';
import { BsArrowUpRight } from "react-icons/bs";
import Project from '../../components/Project'
import styles from './Projects.module.scss'
import projects from '../../data/data'
import Pagination from '../../components/ui/Pagination';
import {motion, AnimatePresence} from 'framer-motion'
import AnimatedPage from '../../components/ui/AnimatedPage';
const Projects = () => {
    const location = useLocation()
    const variants ={
        initial:{
            transform:"translate3d(0,0,0)"
        },
        animate:{
            transform:"translate3d(-25%,0,0)"
        }
    }
    return (
        <AnimatedPage>
            <motion.div 
                className={location.pathname === '/projects' ?`${styles.Projects} ${styles.ProjectsPage}` : styles.Projects}
                >
                <Helmet>
                    <title>Mario Pineda | Projects </title>
                </Helmet>
                <div className={styles.container}>
                    <Pagination number={location.pathname === '/projects' ? '01' : '02'} title='Work' left={true} />
                    <motion.div className={styles.projects} >
                    <AnimatePresence exitBeforeEnter>
                        {
                            projects.map((project,i) =>(
                                location.pathname === '/' ? i < 3 &&
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
        </AnimatedPage>

    )

}

export default Projects
