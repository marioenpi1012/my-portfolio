import React from 'react'
import Project from './Project'
import Carousel from './Carousel'
import {Helmet } from 'react-helmet'
const Projects = () => {
    return (
        <div id='proj'>
            <Helmet>
                <title>Mario Pineda | Projects </title>
            </Helmet>
            <h2 className='projects-title' >projects</h2>
            <div>
                <Project  /> 
            </div>
        </div>
    )

}

export default Projects
