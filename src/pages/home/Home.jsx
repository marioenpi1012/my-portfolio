import React, {useRef} from 'react';
import Mario from '../../assets/images/mario.jpg';
import styles from './Home.module.scss';
import About from '../about/About';
import Projects from '../projects/Projects';
import AnimatedPage from '../../components/ui/AnimatedPage';
import { gsap } from 'gsap'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)
const Home = () => {
    const aboutRef = useRef(null)
    const handleClick = () =>{
        gsap.to(window, {duration:1, scrollTo:"#goTo"})
    }
    
    return (
        <AnimatedPage >
            <div className={styles.Home}>
                <div className={styles.introContainer}>
                    <div className={styles.image}>
                        <img src={Mario} alt="" width='100px' height='100px'/>
                    </div>
                    <h1 className={styles.introduction}>
                        Front End <br />
                        Developer
                    </h1>
                </div>
                <div className={styles.scrollDown} onClick={handleClick}>
                    <div className={styles.mouse}>
                        <div className={styles.scroller}></div>
                    </div>
                </div>
            </div>
            <div id="goTo" className={styles.goTo}></div>
            <About ref={aboutRef} />
            <Projects/>
        </AnimatedPage>

    )
}


export default Home
