import React from 'react'
import {NavLink}  from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'
const Navbar = () => {
    const [close, setClose] = useState(true)

    const onClick = () =>{
        const navLinks = document.querySelector('.nav-links')
        console.log('click working')
        setClose(!close)
        console.log(close)
        if(!close){
            navLinks.style.display = 'none'
            console.log('close')
        }else{
            navLinks.style.display = 'block'
            console.log('open')
        }
        }

    return (
        <nav className='navbar'>
            <div className='left-nav'>
                <NavLink to='/' >
                    <div id='name'>
                        Mario Pineda
                    </div> 
                </NavLink>
                <div onClick={onClick} id='phone-nav' value='false' >
                    {close ?(<FaBars/>):(<FaTimes/>) }
                </div>
            </div>
            
            <div className='nav-links' >
                <ul>
                    <li> <NavLink to='/about'  activeClassName='currentLocation'>About</NavLink></li>
                    <li> <NavLink to='/contact' activeClassName='currentLocation'>Contact Me</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
