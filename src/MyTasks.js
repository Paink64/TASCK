import Button from './components/Button.js';
import { Link } from 'react-router-dom' ;
import React from 'react'
import { useState, useContext } from 'react'
import users from './App';
import firebase from './components/Firebase';
import userDummy from './components/User';
import { ProjectContext } from './ProjectContext'
const MyTasks = ({user}) => {
    
  const [values, setValues] = useState({
    id: 1,
    title: "",
    due: "",
    show: true,
});

const [submitted, setSubmitted] = useState(false);

const handleTitle = (event) => {
    setValues({ ...values, title: event.target.value })
}

const [valid, setValid] = useState(false);

const handleDue = (event) => {
    setValues({ ...values, due: event.target.value })
}

const { projectData, setProject} = useContext(ProjectContext);

const handleSubmit = (event) => {
    event.preventDefault();
    if (values.title && values.due) {
        setValid(true);
    }
    setSubmitted(true);
    if (setSubmitted){
        //id?
        setProject([values])
        var myRef = firebase.database().ref('/users/' + userDummy.userId+'/tasks/').push();
        var key = myRef.key;
        myRef.push({});
        firebase.database().ref('/users/' + userDummy.userId+'/tasks/').set({
            tId: key,
        })
        alert("project id "+userDummy.projectIDs);
        firebase.database().ref('/Projects/'+userDummy.projectIDs+'/tasks/'+key).set({
            tId: key,
            Assigned: userDummy.userId,
            title: values.title,
            due: values.due
        })
        userDummy.isOnProject = true;
    }

}
  
  
  
  
  return (
        <>

<div className="form-container">
            <form className="register-form" onSubmit = {handleSubmit}>
               
                {submitted && valid ? <div className="success-message">
                    Your Task Was Created</div> : null  } 
                    <label>Project Task</label>
                <input
                onChange = {handleTitle}
                value={values.title}
                    id="task-title"
                    className="form-field"
                    type="text"
                    placeholder="Task Title"
                    name="title"/>
                    {submitted && !values.title ? <span>Please Enter a Task Title </span> : null }
                

                <input
                onChange = {handleDue}
                value={values.desc}
                    id="task-desc"
                    className="form-field"
                    type="text"
                    placeholder="Task Description"
                    name="desc" />
                    {submitted && !values.due ? <span>Please Enter a Task Description </span>: null}
              
               
                <button className="form-field" type="submit">
                    Create Task
                </button>
            </form>
        </div>
        
          {user.isOnProject ? <h1 style={{textAlign : 'center'}}>Hello, here are your tasks!</h1> 
            : <h1 style={{ textAlign : 'center',
            marginTop: '200px'}}>Please create or add a project before visiting this page</h1>}
          <h2 style={{textAlign:'center'}}><Link to='/'>
              <Button text='Go Back' color='black'></Button>
          </Link> </h2> 
          
        </>
    )
}

export default MyTasks
