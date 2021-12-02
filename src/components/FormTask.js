import { ProjectContext } from '../ProjectContext';
import {useState, useContext} from 'react';
import firebase from './Firebase';
const FormTask = ({project}) => {

    const [values, setValues] = useState({
        title: "",
        desc: "",
        due: "",
        isCompleted: false,
        assignedTo: []
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    
    const handleTitle = (event) => {
        setValues({ ...values, title: event.target.value })
    }
    const handleDue = (event) => {
        setValues({ ...values, due: event.target.value })
    }
    const handleDesc = (event) => {
        setValues({ ...values, desc: event.target.value})
    }

    const { task, setProject} = useContext(ProjectContext);
    const user = firebase.auth().currentUser;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.title && values.due && values.desc) {
            setValid(true);
        }
        setSubmitted(true);
        if (setSubmitted){
            //id?
            setProject([values])
            var myRef = firebase.database().ref('/Projects/'+ project.pId+'/taskIDs').push();
            var key = myRef.key;
            firebase.database().ref('/Projects/' + project.pId + '/taskIDs'+ key).set({
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

    return (
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
                    placeholder="Project Title"
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
    );
    
    }

export default FormTask;