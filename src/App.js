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
  const [users, setUserInfo] = useState([]); //ATM, used to edit/access user info
  //const [userProjects, setUserProjects]
  const [seePopUp, setSeePopUp] = useState(false); //use to affect pop up windows
  const [project, setProjectNew] = useState([]);
  const [userDummy, setuserDummy] = useState({
    name: 'user1',
    email: 'user1@email.com',
    password: '12345',
    isOnProject: true,
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
