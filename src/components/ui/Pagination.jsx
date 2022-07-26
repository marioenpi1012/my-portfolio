import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/Pagination.module.scss';
const Pagination = ({number, title,left}) =>{
    const variants ={
        hidden:{
            opacity:0,
            scale:0.5,
        },
        animate:{
            opacity:1,
            scale:1,
        }
    }
    const leftVariants = {
        hidden:{
            opacity:0,
            x:'-100px',
        },
        animate:{
            opacity:1,
            x:0
        }
    }
    return(
        <motion.div 
            className={styles.Pagination}
            variants={left ? leftVariants : variants}
            initial='hidden'
            whileInView='animate'
            transition={{duration:1}}
            viewport={{once:false, amount:0.5}}
            style={left &&{position:'sticky',top:0}}
            >
            <div className={styles.pagination}>{number}</div>
            <div className={styles.title}>{title}</div>
        </motion.div>
    )
}

export default Pagination;