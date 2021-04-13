import {Helmet} from 'react-helmet'
import pic from '../images/mario.jpg'
import {NavLink}  from 'react-router-dom'
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
                    <NavLink to='/contact' >
                        <input type="button" value="Contact Me"
                        />
                    </NavLink>
                </div>
            </div>
            </div>
    )
}

export default About
