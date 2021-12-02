import './App.css';
import Header from './components/Header.js';
import Button from './components/Button.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProjectContext } from './ProjectContext';
import { useState } from "react";
import MyTasks from './MyTasks';
import Profile from './Profile';
import Projects_Page from './Projects_Page';
import Signup from './Signup';
import Login from './Login';
import Signout from './Signout';
import userDummy from './components/User';
import firebase from 'firebase';

function App() {
  const [projectData, setProject] = useState([
    {
      id: 1,
      title: '',
      due: '',
      show: false, 
    },
  ])
  const [project, setIsOnProject] = useState();
  const [currentuser, setUser] = useState();
  const [fullName, setFullName] = useState();

  firebase.auth().onAuthStateChanged( (user) => {
    if(user) {
        setUser(user);
        const isOnProjectRef = firebase.database().ref('users/'+ user.uid);
        
        isOnProjectRef.get().then((snapshot) => {
            const data = snapshot.val();
            setIsOnProject(data.isOnProject);
            setFullName(data.full_name);
        })
    }
}
)
  return (
    <Router>
      <div >
        

        <ProjectContext.Provider value={{ projectData, setProject }}>

        <Route path='/' exact>
        <Header title='TASCK '></Header> 
      {(!project && currentuser) ? <h1 style={{textAlign: 'center', marginTop: '200px'}}>
        Hello{', '+fullName}. To get started, please click on the 'Start Project' button above.</h1> 
        : <h1 style={{textAlign: 'center', marginTop:'200px'}}> Hello, please choose a menu above
        (or sign up and/or log in if you're new)</h1>}
        </Route>

        <Route path='/MyTasks'>
        <Header title='TASCK '></Header> 
        <MyTasks user={userDummy}></MyTasks>
      {userDummy.isOnProject && <Button onClick={() => { let currentTasks = userDummy.tasks.slice();
        currentTasks.push('task');
        const userDummy = {...userDummy, tasks: currentTasks};
 } }
        color='green' text='add new task'></Button> }
      {userDummy.isOnProject && userDummy.tasks.map(task => <h1 style={{textAlign: 'center'}}>{task}</h1>)}
        </Route>

        <Route path="/Projects_Page">
        <Header title='TASCK '></Header> 
        <Projects_Page></Projects_Page>
        </Route>
        
        <Route path='/Profile'>
        <Header title='TASCK '></Header> 
        <Profile ></Profile>
        </Route>

        <Route path="/Login">
        <Header title='TASCK '></Header> 
        <Login></Login>
        </Route>

        <Route path="/Signup">
        <Header title='TASCK '></Header> 
        <Signup></Signup>
        </Route>

        <Route path="/Signout">
        <Header title='TASCK '></Header> 
        <Signout ></Signout>
        </Route>



        </ProjectContext.Provider>

      </div>
    </Router>
  );
}

export default App;
