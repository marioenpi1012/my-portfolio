import React from 'react'
import styles from '../styles/SayHello.module.scss'
import {motion} from 'framer-motion'
const SayHello = () => {
    return (
        <div className={styles.SayHello}>
            <div className={styles.container}>
                <div className={styles.subtitle}>don't be shy</div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        say hi
                        <motion.div
                            animate={{rotate:20}}
                            transition={{
                                yoyo:Infinity,
                                from:0,
                                duration:0.3,
                                ease:'easeInOut',
                                type:'tween'
                                }}
                                >
                            👋
                        </motion.div>
                    </div>
                    <div className={styles.email}>
                        <a href="mailto:mariopineda179@gmail.com">
                            mariopineda@gmail.com
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SayHello