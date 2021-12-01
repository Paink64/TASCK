import { useState, useContext } from 'react'
import { ProjectContext } from '../ProjectContext'


const Projects = () => {

    const { projectData } = useContext(ProjectContext);

    return (
        <>
            
             {projectData.map((project) => (<h2 style={{color: "black"}} key={project.id}>Project {project.id}: <br/>{project.title} <br/>
            <h4 class = "date">Due: {project.due}</h4></h2>))}
            
        </>

    )
}

export default Projects