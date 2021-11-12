import Button from './components/Button.js';
import { Link } from 'react-router-dom' ;
import React from 'react'
import { useState } from "react";
import users from './App';
import Tasks from './components/Tasks.js';
import TaskAdd from './components/TaskAdd.js';


const MyTasks = ({user}) => {
  //Is this where I should be storing tasks?

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

  //Editting Tasks
  const onSaveTask = ({ desc, taskDeadlineDate, title }) => {
    console.log("saving tasks");
    setTasks([
      { title: title,
        desc: desc, 
        dateCreated: Date(),
        taskID: 3,
        parentProjectID: 0, 
        taskDeadlineDate: taskDeadlineDate, 
        complete: false,
        isAssigned: false,
        assignedTo: 0 },
      ...tasks,
    ]);
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);


  //Rendering Things Out
  return (
    <div className="App">
      <div className="container">
        <button
          className="button primary"
          onClick={() => setShowTaskEdit(!showTaskEdit)}>
          {!showTaskEdit && "New"}
          {showTaskEdit && "➖"}
        </button>
        {
          showTaskEdit && <TaskAdd task={{}} onSaveTask={onSaveTask} />
        }
        <Tasks tasks={tasks}></Tasks>
      </div>
    </div>
  );
}

export default MyTasks
