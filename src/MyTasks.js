import Button from './components/Button.js';
import { Link } from 'react-router-dom' ;
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import users from './App';
import firebase from './components/Firebase';
import userDummy from './components/User';
import { ProjectContext } from './ProjectContext'
const MyTasks = () => {
    
  const [values, setValues] = useState({
    id: 1,
    title: "",
    due: "",
    show: true,
});
const user = firebase.auth().currentUser;

const [submitted, setSubmitted] = useState(false);

const handleTitle = (event) => {
    setValues({ ...values, title: event.target.value })
}

const [valid, setValid] = useState(false);

const handleDue = (event) => {
    setValues({ ...values, due: event.target.value })
}

const handleDesc = (event) => {
    setValues({ ...values, desc: event.target.value})
}

const { projectData, setProject} = useContext(ProjectContext);

const handleSubmit = (event) => {
    event.preventDefault();
    if (values.title && values.due && values.desc) {
        setValid(true);
    }
    setSubmitted(true);
    if (setSubmitted){
        //id?
        setProject([values])
        var myRef = firebase.database().ref('/tasks/').push();
        var key = myRef.key;
        firebase.database().ref('/tasks/' + key).set({
            tId: key,
        })
        firebase.database().ref('/users/' + user.uid+'/taskIDs/'+key).set({
            tId: key,
        })
        firebase.database().ref('/tasks/'+key).set({
            tId: key,
            ownerId: user.uid,
            title: values.title,
            due: values.due,
            desc: values.desc,
            isCompleted: false,
            assignedTo:[user.uid]
        })
        alert("Task created successfully!");
    }

}

const [taskList, setTaskList] = useState();

useEffect(() => { 
    const tasksRef = firebase.database().ref('tasks/')
    tasksRef.on('value', (snapshot) =>{
        const tasks = snapshot.val();
        const taskList = [];
        for(let id in tasks){
            taskList.push({id, ...tasks[id] });
        }
        setTaskList(taskList);
    });
    }, []);
  

  
  return (
        <>

<div className="form-container">
            <form className="register-form" onSubmit = {handleSubmit}>
               
                {submitted && valid ? <div className="success-message">
                    Your Task Was Created!</div> : null  } 
                    <label>Task Name</label>
                <input
                onChange = {handleTitle}
                value={values.title}
                    id="project-title"
                    className="form-field"
                    type="text"
                    placeholder="Task Title"
                    name="title"/>
                    {submitted && !values.title ? <span>Please Enter a Task Name </span> : null }
                

                <input
                onChange = {handleDue}
                value={values.due}
                    id="due-date"
                    className="form-field"
                    type="text"
                    placeholder="Due Date"
                    name="due" />
                    {submitted && !values.due ? <span>Please Enter a Due Date </span>: null}

                <input
                onChange = {handleDesc}
                value={values.desc}
                    id="task-desc"
                    className="form-field"
                    type="text"
                    placeholder="Task Description"
                    name="due" />
                    {submitted && !values.due ? <span>Enter task description</span>: null}
              
               
                <button className="form-field" type="submit">
                    Create Task
                </button>
            </form>
        </div>
        {taskList ? taskList.map((task, index) => <h2 className='container' style={{color: "black", textAlign:'center'}} key={index}>Task {index + 1}:
                <br/>{task.title} <br/><h4 class = "date">Due: {task.due} </h4> <h4>Description: {task.desc} 
                </h4>Current Status: {task.isCompleted? 'Complete!' : 'Incomplete'}</h2>): ''}
        
          {<h1 style={{ textAlign : 'center',
            marginTop: '200px'}}>Please create or add a project before visiting this page</h1>}
          <h2 style={{textAlign:'center'}}><Link to='/'>
              <Button text='Go Back' color='black'></Button>
          </Link> </h2> 
          
        </>
    )
}

export default MyTasks
