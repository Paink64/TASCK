import { useState, useEffect } from 'react'
import firebase from 'firebase';


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
                .filter(project => project.ownerId == user.uid)
                .map((project, index) => (<h2 style={{color: "black"}} key={index}>Project {index}:
                 <br/>{project.title} <br/><h4 class = "date">Due: {project.due}</h4></h2>)) : ''}
            
            
        </>

    )
}

export default Projects