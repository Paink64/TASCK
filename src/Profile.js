import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link } from 'react-router-dom' ;
import users from './App';
import userDummy from './components/User';

const Profile = ({user}) => {
    return (
        <>
          {userDummy.isLoggedOn ? 
          <div>
          <h1 style={{textAlign : 'center'}}>{userDummy.name}'s profile</h1> 
          <h2>Username: {userDummy.username}</h2>
          <h2>Email: {userDummy.email}</h2>
          <h2>UserId: {userDummy.userId}</h2>
          <h2>Last Login: {userDummy.lastLogin}</h2>
          </div>
            : <h1 style={{ textAlign : 'center',
            marginTop: '200px'}}>Please create or add a project before visiting this page</h1>}
          <h2 style={{textAlign:'center'}}><Link to='/'>
              <Button text='Go Back' color='black'></Button>
          </Link> </h2> 
        </>
    )
}

export default Profile
