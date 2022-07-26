import React from 'react';
import styles from '../../styles/Quote.module.scss'
import { motion } from 'framer-motion';

const Quote = ({},ref) =>{
    const variants ={
        hidden:{
            opacity:0,
            x:'-100px',
        },
        animate:{
            opacity:1,
            x:0,
        }
    }
    return(
        <motion.div
            ref={ref}
            className={styles.Quote}
            variants={variants}
            initial='hidden'
            whileInView='animate'
            viewport={{once:false, amount:0.7}}
            transition={{duration:1}}
            >
            <p className={styles.container}>
                Let's work together to create high
                quality design and an engaging experience.
            </p>
        </motion.div>
    )
}

export default React.forwardRef(Quote);