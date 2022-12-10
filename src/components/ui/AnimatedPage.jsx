import { motion } from 'framer-motion';

const AnimatedPage = ({children, className=''}) =>{
    const variants = {
        initial:{
            opacity:0
        },
        animate:{
            opacity:1
        },
        exit:{
            opacity:0
        }
    }
    return(
        <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration:0.75}}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;