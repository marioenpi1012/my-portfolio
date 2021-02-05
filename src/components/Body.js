import React from 'react'
import Typewriter from 'typewriter-effect'
const Body = () => {
    
    return (
        <div id='body'>
            <div className="text">
                <span id='text'> I'm Mario </span> <Typewriter  options={{loop:true}}
                    onInit={(typewriter) =>{
                        typewriter
                        .typeString("a Web Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Welcome to My Journey!")
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                    }}
                />
            </div>
        </div>
    )
}


export default Body
