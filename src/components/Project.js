import React,{useState} from 'react'
import {FaGithub} from 'react-icons/fa';
import styles from '../pages/projects/Projects.module.scss'
import {motion} from 'framer-motion/dist/framer-motion'
const Project = ({project}) => {
    const [mouse, setMouse] = useState({x:0,y:0,active:false})
    const viewCursor = (e) =>{
        const x = e.clientX * 100 / window.innerWidth
        const y = e.clientY * 100 / window.innerHeight
        setMouse({x:x,y:y,active:true})
    }
    const variants = {
        hidden:{
            opacity:0,
            transform:`translate3d(0px,0px,0px)`
        },
        animate:{
            opacity:1,
        },
        exit:{
        }

    }
    const showVariants = {
        hidden:{
            opacity:0,
            y:"60%"
        },
        animate:{
            opacity:1,
            y:"0%"
        }
    }
    return (
        <a href={project.liveWebsite} target='_blank'>
            <motion.div
                style={{backgroundImage:`url(${project.image})`}}
                className={styles.project}
                onMouseMove={viewCursor}
                onMouseLeave={()=>setMouse({active:false})}
                initial='hidden'
                whileHover='animate'
                >
                <motion.div
                    className={styles.pageOverlay}

                    ></motion.div>
                <motion.div
                    className={styles.view}
                    variants={variants}
                    initial='hidden'
                    animate={ mouse.active ? {transform:`translate3d(${mouse.x}px, ${mouse.y}px,0px) scale3d(1,1,1)`,opacity:1} : {opacity:0}}
                    exit='exit'
                    >
                    <div>view</div>
                </motion.div>
                <motion.div
                    variants={showVariants}
                    className={styles.infoContainer}>
                    <motion.div
                        className={styles.info}>
                        <div
                            className={styles.title}>{project.title}
                        </div>
                        <motion.div
                            className={styles.description}>{project.description}</motion.div>
                    </motion.div>
                    <div className={styles.github}><a href={project.code} target='_blank'><FaGithub /></a></div>
                </motion.div>
            </motion.div>
        </a>
    )
}

export default Project