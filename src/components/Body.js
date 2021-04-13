import React from 'react'
import Typewriter from 'typewriter-effect'
import Mario from '../images/mario.jpg'
import Projects from './Projects'
import {NavLink}  from 'react-router-dom'
const Body = () => {
    
    return (
        <div id='body'>
            <div className="intro-container">
                <div className="introduction">
                    <p>Hi,</p>
                    <p>I'm Mario</p>
                    <p>A Front End Developer</p>
                    <NavLink to='/projects' >
                        <input type="button" value="My Projects"
                        />
                    </NavLink>
                    
                </div>
                <div className="image">
                    <img src={Mario} alt="" width='100px' height='100px'/>
                </div>
            </div>
        </div>
    )
}


export default Body
