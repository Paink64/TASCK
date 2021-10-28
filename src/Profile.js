import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link } from 'react-router-dom' ;
import users from './App';

const Profile = ({user}) => {
    return (
        <>
          {user.isOnProject ? <h1 style={{textAlign : 'center'}}>{user.name}'s profile</h1> 
            : <h1 style={{ textAlign : 'center',
            marginTop: '200px'}}>Please create or add a project before visiting this page</h1>}
          <h2 style={{textAlign:'center'}}><Link to='/'>
              <Button text='Go Back' color='black'></Button>
          </Link> </h2> 
        </>
    )
}

export default Profile
