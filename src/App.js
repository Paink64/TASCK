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


function App() {
  const [tasks, setTasks] = useState([]); //used to create, edit tasks
  const [users, setUserInfo] = useState([]); //ATM, used to edit/access user info
  //const [userProjects, setUserProjects]
  const [seePopUp, setSeePopUp] = useState(false); //use to affect pop up windows
  const [project, setProjectNew] = useState([]);
  const [userDummy, setuserDummy] = useState({
    name: 'user1',
    email: 'user1@email.com',
    password: '12345',
    isOnProject: false,
    tasks: ['task1', 'task2', 'task3'],
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

        <Route path='/' exact>
      {!userDummy.isOnProject && <h1 style={{textAlign: 'center', marginTop: '200px'}}>
        Hello, {userDummy.name}. To get started, please click on the 'Start Project' button above.
        </h1>}
        </Route>

        <Route path='/MyTasks'>
        <MyTasks user={userDummy}></MyTasks>
      {userDummy.isOnProject && <Button onClick={() => { let currentTasks = userDummy.tasks.slice();
        currentTasks.push('task');
        const newUserDummy = {...userDummy, tasks: currentTasks};
        setuserDummy(newUserDummy); } }
        color='green' text='add new task'></Button> }
      {userDummy.isOnProject && userDummy.tasks.map(task => <h1 style={{textAlign: 'center'}}>{task}</h1>)}
        </Route>

        <Route path="/Projects_Page">
        <Projects_Page></Projects_Page>
        </Route>
        
        <Route path='/Profile'>
        <Profile user={userDummy}></Profile>
        </Route>

        </ProjectContext.Provider>

      </div>
    </Router>
  );
}

export default App;
