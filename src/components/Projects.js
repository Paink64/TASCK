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
    const dummyID = "9z0CbwIp6nN6wI3r2IM0GTFaVff1";
 
    var userProjects = {
        projects: [],
    };
  /*  const [projectData, setProject] = useState([
        {
          userProjects = ,
         
        },
    */    
    //Returns the project ID's of the user
   
    useEffect(() => {
        const userProjectsRef = firebase.database().ref('users/'+ dummyID+ '/projectIDs');
        userProjectsRef.on('value', (snapshot) => {
            userProjects.projects = snapshot.val();
  //          console.log(userProjects.projects);
          //  console.log(snapshot.val());
 
         
          for(const pId in userProjects.projects){
           //   for (test in  )
           //  if(pID == )
            //  console.log(pId);                    
          }
 
        });
       
       
    },[]);
    useEffect(()=>{
        const projectRef = firebase.database().ref('Projects/');
        projectRef.on('value', (snapshot)=>{
            console.log(snapshot.val());
         
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
   
    return (
       
        <>
           
             {projectData.map((project) => (<h2 style={{color: "black"}} key={project.id}>Project {project.id}: <br/>{project.title} <br/>
            <h4 class = "date">Due: {project.due}</h4></h2>))}
           
        </>
 
    )
}
 
export default Projects
