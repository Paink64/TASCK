import Button from './components/Button.js';
import { Link } from 'react-router-dom' ;
import React from 'react'
import { useState } from "react";
import users from './App';

const MyTasks = ({user}) => {
    return (
        <>
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
