import todoImg from '../images/desktop-design-dark.jpg'
import InsureLPImg from '../images/desktop-preview.jpg'

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

    const projectInfo = projectsInfo.map((project) =>{
        return(
            <div className="project" key={project.id}>
                <div id='container' >
                    <div className="title"> <h3>{project.title}</h3></div>
                    <img className="image" src={project.image} alt=""/>
                    <div className="description">
                        {project.description} 
                    </div>
                </div>
                <div className="btns">
                    <button onClick={() => window.open(project.code)}>Code</button>
                    <button onClick={() => window.open(project.liveWebsite)}>Live Website</button>
                </div>
            </div>
            
            )
        })
    return (
        
        <div className='projects' onMouseOver={hoverEffect}  >
            {projectInfo }
        </div>

        
        
    )
}

export default Project
