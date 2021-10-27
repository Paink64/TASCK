import { useState, useContext } from 'react'
import { ProjectContext } from '../Contexts/ProjectContext'


const Projects = () => {

    const { projectData } = useContext(ProjectContext);

    return (
        <>
            {projectData.map((project) => (<h3 key={project.id}>{project.title}</h3>))}
        </>

    )
}

export default Projects
