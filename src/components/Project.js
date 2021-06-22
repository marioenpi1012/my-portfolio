import todoImg from '../images/desktop-design-dark.jpg'
import InsureLPImg from '../images/desktop-preview.jpg'
import NetflixCloneImg from '../images/netflixClone.png'

import {useState} from 'react'
import styled from 'styled-components'
const Project = () => {
    const projectsInfo = [
        {
            id :0,
            title: 'Todo App',
            image: todoImg,
            description: "Build with HTML/ SCSS and JavaScript A todo app that stores its data in local storage as long with a dark and light theme. Design Credit to FrontEnd Mentor.",
            liveWebsite: 'https://marioenpi1012.github.io/todo-app/',
            code:'https://github.com/marioenpi1012/todo-app'
        },
        {
            id:1,
            title: 'Insure Landing Page',
            image: InsureLPImg,
            description: "Build with HTML/ SCSS and JavaScript A company landing page Design Credit to FrontEnd Mentor.",
            liveWebsite: 'https://marioenpi1012.github.io/InsureLandingPage/',
            code : 'https://github.com/marioenpi1012/InsureLandingPage'
        },
        {
            id:2,
            title: 'Netflix Clone',
            image: NetflixCloneImg,
            description: "Build with HTML/ CSS and JavaScript. A Netflix Clone using an API to get trending, top-rated and more movies/tv-shows",
            liveWebsite: 'https://marioenpi1012.github.io/netflix-clone/#/',
            code : 'https://github.com/marioenpi1012/netflix-clone'
        }
    ]

    const hoverEffect = () =>{
        const project = document.querySelectorAll('.project')
        project.forEach(pr =>{
            pr.addEventListener('mouseover', () =>{
                // div id container
                pr.children[0].classList.add('hover')
                // btns
                pr.children[1].classList.add('btn-display')
            })
            pr.addEventListener('mouseout', () =>{
                pr.children[0].classList.remove('hover')
                pr.children[1].classList.remove('btn-display')
            })
        })
    }
    const [current, setCurrent] = useState(projectsInfo[0])
    const [active, setActive] = useState(0)
    const handleSetClick = (e) =>{
        setCurrent(projectsInfo[e.target.getAttribute('data-project')])
        setActive(e.target.getAttribute('data-project'))
    }
    const prev = () =>{
        if(current.id == 0){
            setCurrent(projectsInfo[projectsInfo.length  - 1 ])
            setActive(projectsInfo.length  - 1 )
            console.log('id',projectsInfo.length  - 1 )
        }else{
            setCurrent(projectsInfo[current.id - 1])
            setActive(current.id - 1 )
            console.log(current.id - 1)
        }
        console.log('prev working')
    }
    const next = () =>{
        if(current.id == projectsInfo.length - 1 ){
            setCurrent(projectsInfo[current.id - projectsInfo.length + 1])
            setActive(current.id - projectsInfo.length + 1)
            console.log('id1', current.id - projectsInfo.length + 1)
        }else{
            setCurrent(projectsInfo[current.id + 1])
            setActive(current.id + 1)
            console.log('id2', current.id  + 1)
        }
        console.log(projectsInfo.length - 1)


    }
    const mobileHover = () =>{
        console.log('event working')
        const project = document.querySelectorAll('.project')
        project.forEach(pr =>{
            pr.addEventListener('click', () =>{
                // div id container
                pr.children[0].classList.add('hover')
                // btns
                pr.children[1].classList.add('btn-display')

                setTimeout(
                    function(){
                    pr.children[0].classList.remove('hover')
                    pr.children[1].classList.remove('btn-display')
                },5000
                )
            })
        })
    }
    return (
        <div onMouseOver={hoverEffect}  onClick={mobileHover}>

            <div className='carousel-container'>
                <div className='arrows' id='prev' onClick={prev}> &#8249;</div>
                <div className='project' key={current.id}>
                    <div id="container">
                        <div className="title">
                            <h3>{current.title}</h3>
                        </div>
                        <img src={current.image} className="image"/>
                        <div className="description">{current.description} </div>
                    </div>
                    <div className="btns">
                        <button onClick={()=>window.open(current.code)}>Code</button>
                        <button onClick={()=>window.open(current.liveWebsite)}>Live Website</button>
                    </div>
                    <div className="slider">
                    {Object.keys(projectsInfo).map(index =>(
                        index == active
                        ? <Current className='dots'  />
                        : <span 
                        className='dots' onClick={event=> handleSetClick(event)}
                        data-project={index}
                        style={index == active ? {background:'#45454d'} : {}}
                        key={index}/>))}
                        
                </div>
                </div>
                <div className='arrows' id='next' onClick={next} >
                    &#8250;
                </div>

            </div>

        </div>
    )
}

const Current = styled.span `
    :before{
        background:#45454d
    }
`

export default Project
