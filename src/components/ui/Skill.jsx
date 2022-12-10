import {FaJs,FaHtml5,FaCss3,FaGitSquare,FaGithubSquare, FaReact,FaSass} from 'react-icons/fa';
import styles from '../../styles/Skills.module.scss';
import Pagination from './Pagination';
const Skills = () =>{
    return (
        <div className={styles.Skills}>
            <Pagination number='02' title='skills' />
            <div 
                className={styles.container}
                >
                <div className={styles.skill}>
                    <FaJs />
                </div>
                <div className={styles.skill}>
                    <FaHtml5 />
                </div>
                <div className={styles.skill}>
                    <FaCss3 />
                </div>
                <div className={styles.skill}>
                    <FaGitSquare />
                </div>
                <div className={styles.skill}>
                    <FaGithubSquare />
                </div>
                <div className={styles.skill}>
                    <FaReact />
                </div>
                <div className={styles.skill}>
                    <FaSass />
                </div>
                <div className={styles.skill}>
                    <FaJs />
                </div>
                <div className={styles.skill}>
                    <FaHtml5 />
                </div>
                <div className={styles.skill}>
                    <FaCss3 />
                </div>
                <div className={styles.skill}>
                    <FaGitSquare />
                </div>
                <div className={styles.skill}>
                    <FaGithubSquare />
                </div>
                <div className={styles.skill}>
                    <FaReact />
                </div>
                <div className={styles.skill}>
                    <FaSass />
                </div>
            </div>
        </div>
    )
}

export default Skills;