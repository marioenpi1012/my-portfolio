import {Helmet} from 'react-helmet'
import pic from '../images/mario.jpg'
const About = () => {
    return (
        <div>
            <Helmet>
                <title>My Portfolio | About</title>
            </Helmet>
            <h2 id='title'>Hi, Thanks for Visiting My Site !</h2>
            <div className="container">
                <div className="photo">
                    <img src={pic} alt=""/>
                </div>
                <div className="description">
                    <p>
                        Hi, my name is Mario and I'm a 
                        Front End Developer Student at
                        Houston Community College. I have
                        experience with HTML, CSS, JavaScript and React.
                        
                    </p>
                </div>
            </div>
            </div>
    )
}

export default About
