import { ProjectContext } from '../ProjectContext'
import {useState, useContext} from 'react'
import firebase from './Firebase';
import userDummy from './User';
const Form = () => {

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
            var myRef = firebase.database().ref('/users/' + userDummy.userId+'/projectIDs').push();
            var key = myRef.key;
            myRef.push({});
            firebase.database().ref('/users/' + userDummy.userId+'/projectIDs/'+key).set({
                pId: key,
            })
            firebase.database().ref('/Projects/'+key).set({
                pId: key,
                ownerId: userDummy.userId,
                title: values.title,
                due: values.due
            })
            userDummy.projectIDs = key;
            alert("project id "+userDummy.projectIDs);
            userDummy.isOnProject = true;
        }

    }

    return (
        <div className="form-container">
            <form className="register-form" onSubmit = {handleSubmit}>
               
                {submitted && valid ? <div className="success-message">
                    Your Project Was Created</div> : null  } 
                    <label>Project Title</label>
                <input
                onChange = {handleTitle}
                value={values.title}
                    id="project-title"
                    className="form-field"
                    type="text"
                    placeholder="Project Title"
                    name="title"/>
                    {submitted && !values.title ? <span>Please Enter a Project Name </span> : null }
                
                    <label>Due Date</label>
                <input
                onChange = {handleDue}
                value={values.due}
                    id="due-date"
                    className="form-field"
                    type="text"
                    placeholder="Due Date"
                    name="due" />
                    {submitted && !values.due ? <span>Please Enter a Due Date </span>: null}
              
               
                <button className="form-field" type="submit">
                    Create Project
                </button>
            </form>
        </div>
    );
    
    }

export default Form