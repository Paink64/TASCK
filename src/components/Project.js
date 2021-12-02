import firebase from "firebase";
import Button from "./Button";
import { useState, useEffect } from "react";
import FormTask from "./FormTask"

import React from 'react'

const Project = ({project, index}) => {
    const [addToggle, setToggleAddTask] = useState(false);
    const [expandToggle, setToggleExpandTask] = useState(false);


    const addTrigger = () => {
        setToggleAddTask(addToggle => !addToggle)
    };

    const expandTrigger = () => {
        setToggleExpandTask(expandToggle => !expandToggle)
    };

    const user = firebase.auth().currentUser;

    const deleteProject = (project) => {
        firebase.database().ref('/users/' + user.uid + '/projectIDs/'+project.pId).remove();
        firebase.database().ref('/Projects/'+project.pId).remove();
    }

    const [taskList, setTaskList] = useState();

    useEffect(() => { 
    const taskRef = firebase.database().ref('/Projects/'+ project.pId+'/taskIDs');
    taskRef.on('value', (snapshot) =>{
        const tasks = snapshot.val();
        const taskList = [];
        for(let id in tasks){
            taskList.push({id, ...tasks[id] });
        }
        setTaskList(taskList);
    });
    }, [project.pId]);

    return (
        <div>
            <h2 style={{color: "black"}} key={index}>Project {index}:
                 <br/>{project.title} <br/><h4 class = "date">Due: {project.due}</h4></h2>
            <Button color="Blue" text="Expand Tasks" onClick={expandTrigger}></Button>
            <Button color="Green" text="Add Tasks" onClick={addTrigger}></Button>
            <Button color="Red" text="Delete Project"onClick={deleteProject}></Button>

            {addToggle ? <FormTask project={project}></FormTask> : null}
            {expandToggle && taskList ?  taskList.map((task, index) => 
                <h3 style={{color: "black"}} key={index}>Task {index}:
                <br/>{task.title} <br/><h4 class = "date">Due: {task.due} 
                Description: {task.desc}</h4></h3>) : ''}
        </div>
    )
}

export default Project
