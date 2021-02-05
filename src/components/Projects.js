import React from 'react'
import Project from './Project'


const Projects = () => {
    const container = document.querySelectorAll('#container')
    const btn = document.querySelectorAll('.btns')
    const allProject = document.querySelectorAll('.project')

    const MouseOver = (e) =>{
        console.log('working')
        allProject.forEach(project =>{
            project.addEventListener('mouseover', ()=>{
                console.log('mouseOver')
                project.children[0].classList.add('hover')
                project.children[1].classList.add('btn-display')
            })
        })
    }
    
    const MouseOut = (e) =>{
        for(let i = 0 ; i < container.length; i++){
            container[i].classList.remove('hover')
            btn[i].classList.remove('btn-display')
        } 
    }

    const phoneSlider = () =>{
        const width = window.innerWidth
        console.log('click')
        console.log(width)
    }

    return (
        <div >
            <h2 className='projects-title' >projects</h2>
            <div  onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={phoneSlider}>
                <Project   /> 
            </div>
                
        </div>
    )

}

export default Projects
