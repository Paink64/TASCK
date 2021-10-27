const projectData = [
{
    id:     1,
    title:  'Software Engineering Project',
    due:    'October 26th, 2021',
},

]

const Projects = () => {
    return (
        <>
            {projectData.map((project) =>(<h3>{project.title}</h3>)) }
        </>
        
    )
}

export default Projects
