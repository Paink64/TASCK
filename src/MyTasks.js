import Button from './components/Button.js';
import { Link } from 'react-router-dom' ;
import React from 'react'
import { useState } from "react";
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
      isAssigned: true,
      assignedTo: 1 },
    
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
  //Delete Tasks Needs to be refactored DOES NOT DO ANYTHING
  function handleDeleteClick(taskID)
  {
    const removeTask = tasks.filter((tasks) => {
      return tasks.taskID !== taskID;
    });
    setTasks(removeTask);
  }

  //Editting Tasks Brute Force It will just remake the id. You need storage(firebase) to do things properly
  const onEditTask = ({ desc, 
                        taskDeadlineDate, 
                        title, 
                        taskID,
                        parentProjectID,
                        complete,
                        isAssigned,
                        assignedTo,
                      }) => {
    console.log("editing tasks");
    setTasks([
      //...tasks means copy over the old array of tasks...
      //In this case we are copy over the old array of tasks.
      //Then overwritting one with new data
      ...tasks,
      { 
        title: title,
        desc: desc, 
        dateCreated: Date(),
        taskID:  (tasks.length + 1),
        parentProjectID: 0, 
        taskDeadlineDate: taskDeadlineDate, 
        complete: false,
        isAssigned: false,
        assignedTo: 0 },
    ]);
  };
  //Adding Tasks to the array of Tasks
  //This gets called by TaskAdd.js

  const onAddTask = ({ desc, taskDeadlineDate, title}) => {
    console.log("saving tasks");
    console.log(tasks.length);
    setTasks([
      //...tasks means copy over the old array of tasks...
      //In this case we are copy over the old array of tasks. Then adding the new one to the end of it.
      ...tasks,
      { 
        title: title,
        desc: desc, 
        dateCreated: Date(),
        taskID:  (tasks.length + 1),
        parentProjectID: 0, 
        taskDeadlineDate: taskDeadlineDate, 
        complete: false,
        isAssigned: false,
        assignedTo: 0 },
    ]);
  };

  //Task States

  //To be used
  //Show the button to add tasks
  const [showAddTask, setShowAddTask] = useState(false);

  //Boolean to to track if we are editting
  const [isEditing, setIsEditing] = useState(false);

  //Which tasks we are editing
  const [currentTask, setCurrentTask] = useState({});

  //Handler for new input when editting
  function handleEditInputChange(e)
  {
    //Set the new state value to whats currently being editted
    setCurrentTask({...currentTask, text: e.target.value});
    console.log(currentTask);
  }


  //Rendering Things Out
  return (
    <div className="App">
           <h1 align="center">Your Tasks</h1>
        <button
          className="button primary"
          onClick={() => setShowAddTask(!showAddTask)}>
          {!showAddTask && "New Task"}
          {showAddTask && "➖"}
        </button>
      <div className="container">
        {
          showAddTask && <TaskAdd task={{}} onAddTask={onAddTask} />
        }
        <Tasks tasks={tasks}></Tasks>
      </div>
    </div>
  );
}

export default MyTasks
