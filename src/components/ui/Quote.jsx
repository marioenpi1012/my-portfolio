import React from 'react';
import styles from '../../styles/Quote.module.scss'
import { motion } from 'framer-motion';

const Quote = ({className='', quote},ref) =>{
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
            className={`${styles.Quote} ${className}`}
            initial='hidden'
            whileInView='animate'
            viewport={{once:false, amount:0.8}}
            >
            <motion.p 
                className={styles.container}
                variants={variants}
                transition={{duration:1}}
                >
                {quote}
            </motion.p>
        </motion.div>
    )
}

export default React.forwardRef(Quote);