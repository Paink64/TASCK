
import { ProjectContext } from '../Contexts/ProjectContext'
import {useState, useContext} from 'react'
const Form = () => {

    

    const [values, setValues] = useState({
        id: 1,
        title: "",
        due: "",
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
