import React from 'react'
import {NavLink}  from 'react-router-dom'
import {FaBars, FaTimes, FaLinkedin} from 'react-icons/fa'
import {useState} from 'react'
const Navbar = () => {
    const [close, setClose] = useState(true)

    const onClick = () =>{
        const navLinks = document.querySelectorAll('.nav-links')
        console.log('click working')
        setClose(!close)
        console.log(close)
        if(!close){
            navLinks.forEach(nav =>{
                nav.style.display = 'none'
            })
        }else{
            navLinks.forEach(nav =>{
                nav.style.display = 'block'
            })
            
            console.log('open')
        }
        }

    return (
        <div className="nav-container">
            <nav className='navbar'>
                <div className="left-nav">
                    <NavLink to='/' id='name'>Mario Pineda</NavLink>
                    <div onClick={onClick} id='phone-nav' value='false' >
                        {close ?(<FaBars/>):(<FaTimes/>) }
                    </div>
                </div>
                    <div className='nav-links' >
                        <ul>
                            <li><NavLink to='/projects' activeClassName='currentLocation'>Projects</NavLink></li>
                            <li> <NavLink to='/about'  activeClassName='currentLocation'>About</NavLink></li>
                            <li> <NavLink to='/contact' activeClassName='currentLocation'>Contact Me</NavLink></li>
                        </ul>
                        <ul>
                            <li> <a href="https://www.linkedin.com/in/mario-pineda-9a6b68186/" target='_blank'><FaLinkedin /></a></li>
                        </ul>
                    </div>
                    
                
            </nav>
        </div>
        
    )
}

export default Navbar
