import { useState, useEffect } from 'react'
import firebase from 'firebase';
import Project from './Project';


const Projects = () => {
    const [projectList, setProjectList] = useState();

    useEffect(() => { 
    const projectRef = firebase.database().ref('/Projects/');
    projectRef.on('value', (snapshot) =>{
        const projects = snapshot.val();
        const projectList = [];
        for(let id in projects){
            projectList.push({id, ...projects[id] });
        }
        setProjectList(projectList);
    });
    }, []);
    const user = firebase.auth().currentUser;

    return (
        <>
            
            {projectList ? 
              projectList
                .filter(project => project.ownerId === user.uid)
                .map((project, index) => <Project project={project} key={index} />) : ''}
            
        </>

    )
}

export default Projects