<<<<<<< Updated upstream
import { useState, useContext } from 'react'
import { ProjectContext } from '../ProjectContext'
import firebase from '../components/Firebase';
import {useEffect} from 'react'; //Needed to fetch user's data
 
const Projects = () => {
    const [projectData2,setData] = useState([
       
    ])
 
//ID for testing (Have to change to use logged in user's ID)
  //Need to check the project ID's in the user and then display
  //from title and due date from the project
    const dummyID = "23WymVHOLxUIVZ6l2OxzyF4eMWC2";
 
    var userProjects = {
        projects: [],
    };
  /*  const [projectData, setProject] = useState([
        {
          userProjects = ,
         -MptIqK1a6kC1ey8FT-q
        },
    */    
    //Returns the project ID's of the user
   
    useEffect(() => {
        const userProjectsRef = firebase.database().ref('users/'+ dummyID+ '/projectIDs');
        userProjectsRef.on('value', (snapshot) => {
            userProjects.projects = snapshot.val();
            console.log(userProjects.projects);
          //  console.log(snapshot.val());
 
         
          for(const pId in userProjects.projects){
           //   for (test in  )
           //  if(pID == )
          //    console.log(pId);                    
          }
 
        });
       
       
    },[]);
    useEffect(()=>{
        const projectRef = firebase.database().ref('Projects/');
        projectRef.on('value', (snapshot)=>{
          //  console.log(snapshot.val());
         
            for(const pId in userProjects.projects){
                for(const test in snapshot.val()){
                   
                    if(pId == test ) setData(projectData2=>[...projectData2,"yo"]);
                   
                     //console.log(test);
                }
               // console.log(pId);
            }
           
           // console.log();
        });
    },[]);
    //Not needed when moved to firebase
    const { projectData } = useContext(ProjectContext);
   
=======
import { useState, useEffect } from 'react'
import firebase from 'firebase';
import {FaTimes} from 'react-icons/fa'

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


    //Delete Proj
    const deleteProj =(id) =>{
        let key =id
    firebase.database().ref(`Projects/${key}`).remove()
    firebase.database().ref(`users/${user.uid}/projectIDs/${key}`).remove()
        console.log('delete',key)
    }
>>>>>>> Stashed changes
    return (
       
        <>
<<<<<<< Updated upstream
           
             {projectData.map((project) => (<h2 style={{color: "black"}} key={project.id}>Project {project.id}: <br/>{project.title} <br/>
            <h4 class = "date">Due: {project.due}</h4></h2>))}
           
=======
            
            {projectList ? 
              projectList
                .filter(project => project.ownerId == user.uid)
                .map((project, index) => (<h2 style={{color: "black"}} key={index}>Project {index+1}: 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteProj(project.id)}/>
                 <br/>{project.title} <br/><h4 class = "date">Due: {project.due}</h4></h2>)) : ''}
            
            
>>>>>>> Stashed changes
        </>
 
    )
}
 
export default Projects
