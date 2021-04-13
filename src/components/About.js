import {Helmet} from 'react-helmet'
import pic from '../images/mario.jpg'
const About = () => {
    return (
        <div className='about'>
            <Helmet>
                <title>Mario Pineda | About</title>
            </Helmet>
            <div className="container">
                <div className="photo">
                    <img src={pic} alt=""/>
                </div>
                <div id="title">About Me</div>
                <div className="description">
                    <p>
                        Hi, my name is Mario; I'm a 
                        Front End Developer Student at
                        Houston Community College. I have
                        experience with HTML, CSS, JavaScript, React and 
                        Responsive designed. 
                        
                    </p>
                    <input type="button" value="Get in Touch"/>
                </div>
            </div>
            </div>
    )
}

export default About
