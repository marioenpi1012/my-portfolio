import React, {useRef} from 'react';
import Mario from '../../assets/images/mario.jpg';
import styles from './Home.module.scss';
import {motion} from 'framer-motion';
import About from '../about/About';
import Projects from '../projects/Projects';
import Quote from '../../components/ui/Quote';
import AnimatedPage from '../../components/ui/AnimatedPage';

const Home = () => {
    const aboutRef = useRef(null)
    const click = () =>{
        // aboutRef.current.scrollIntoView(true,{behavior:"smooth"})
        window.scrollTo(0,`${aboutRef.current.clientHeight}`)
    }
    
    return (
        <AnimatedPage >
        <motion.div 
            className={styles.Home}
            
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
                </div>
                
            </div>
            <div className={styles.scrollDown} onClick={click}>
                <div className={styles.mouse}>
                    <div className={styles.scroller}></div>
                </div>
            </div>
        </motion.div>
        <About ref={aboutRef} />
        <Projects/>
        </AnimatedPage>

    )
}


export default Home
