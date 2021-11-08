import './App.css';
import Header from './components/Header.js';
import Button from './components/Button.js';
import Navitem from './components/Navitem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import MyTasks from './MyTasks';
import Profile from './Profile';
import PopUp from './components/PopUp';
import { ProjectContext } from './ProjectContext';
import Projects_Page from './Projects_Page'
import Tasks from './components/Tasks';

//This is something that I(Matt) am following from a tutorial
import "./assets/styles.css";


function App() {
  /*
  'Title' is the title of task itself
  'desc' is the description of the task
  'taskID' is the ID of the task to keep track of them
  'parentProjectID' is what project the task belongs too
  'dateCreated' when task was created
  'taskDeadlineDate' Deadline of when task should be completed
  'complete' boolean stating if task is done
  'isAssinged' is task assigned to user
  'assignedTo' user id that task is assigned to
  */
  const [tasks, setTasks] = useState([
    { title: "Title",
      desc: "Description", 
      taskID: 1,
      parentProjectID: 0, 
      dateCreated: "2021-01-03 10:00",
      taskDeadlineDate: "", 
      complete: false,
      isAssigned: false,
      assignedTo: 0 },
    { title: "Second Title",
      desc: "Second Description",  
      taskID: 2,
      parentProjectID: 0,  
      dateCreated: "2021-01-05 15:00",
      taskDeadlineDate: "", 
      complete: false,
      isAssigned: false,
      assignedTo: 0 },
  ]);
  




  const [users, setUserInfo] = useState([]); //ATM, used to edit/access user info
  //const [userProjects, setUserProjects]
  const [seePopUp, setSeePopUp] = useState(false); //use to affect pop up windows
  const [project, setProjectNew] = useState([]);
  const [userDummy, setuserDummy] = useState({
    name: 'user1',
    email: 'user1@email.com',
    password: '12345',
    isOnProject: true,
    tasks, //tasks is a place holder for to know to show that everthing works. assignedTaskIDs will be a array of taskids that are assigned to used
    assignedTaskIDs: [],
    projectIDs: [],
  });
  const [projectData, setProject] = useState([
    {
      id: 1,
      title: 'Software Engineering Project',
      due: 'October 26th, 2021',
    },

  ])


  const projects = {}

  //current user

  /*<h2 style={{textAlign: 'center'}}>
        <Button onClick={() => setSeePopUp(!seePopUp)} color='blue' text='Pop Up button'></Button>
      {seePopUp && <PopUp toggle={() => setSeePopUp(!seePopUp)} />} */

  return (
    <Router>
      <div >
        <Header title='TASCK ' user={userDummy}></Header>

        <ProjectContext.Provider value={{ projectData, setProject }}>
        
      {/*
        You serious THIS is how we comment.....
        Anyways this is the homepage
        */}
        <Route path='/' exact>
      {!userDummy.isOnProject && <h1 style={{textAlign: 'center', marginTop: '200px'}}>
        Hello, {userDummy.name}. To get started, please click on the 'Start Project' button above.
        </h1>}
        </Route>

        {/*This the MyTasks Page */}
        <Route path='/MyTasks'>
       <MyTasks user={userDummy}></MyTasks>
        </Route>

        {/*
        This is the projects page
         */}
        <Route path="/Projects_Page">
        <Projects_Page></Projects_Page>
        </Route>
        
        {/*
         * This is the the profile
         */}
        <Route path='/Profile'>
        <Profile user={userDummy}></Profile>
        </Route>

        </ProjectContext.Provider>

      </div>
    </Router>
  );
}

export default App;
