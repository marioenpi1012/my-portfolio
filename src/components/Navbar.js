import React from 'react'
import {Link}  from 'react-router-dom'
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
                <Link to='/'>
                    <div id='name'>
                        Mario Pineda
                    </div> 
                </Link>
                <div onClick={onClick} id='phone-nav' value='false'>
                    {close ?(<FaBars/>):(<FaTimes/>) }
                </div>
            </div>
            
            <div className='nav-links' >
                <ul>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact Me</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
