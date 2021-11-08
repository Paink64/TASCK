import Button from './components/Button.js';
import { Link } from 'react-router-dom' ;
import React from 'react'
import { useState } from "react";
import users from './App';
import Tasks from './components/Tasks.js';


const MyTasks = ({user}) => {
  return (
    <div className="App">
      <div className="container">
        <Tasks tasks={user.tasks}></Tasks>
      </div>
    </div>
  );
}

export default MyTasks
