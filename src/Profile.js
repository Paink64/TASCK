import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link } from 'react-router-dom' ;
import users from './App';
import userDummy from './components/User';
import firebase from './components/Firebase';

const Profile = () => {
  const [userFullName, setUserFullName] = useState();
  const [userName, setUserName] = useState();
  const [lastLogin, setLastLogin] = useState();

  const user = firebase.auth().currentUser;
  const userRef = firebase.database().ref('users/'+ user.uid);

  userRef.get().then((snapshot) =>{
    const data = snapshot.val();
    setUserFullName(data.full_name);
    setUserName(data.userName);
    setLastLogin(data.lastLogin);

  })

    return (
        <>
          <div>
          <h1 style={{textAlign : 'center'}}>{userFullName}'s profile</h1> 
          <h2>Username: {userName}</h2>
          <h2>Email: {user.email}</h2>
          <h2>UserId: {user.uid}</h2>
          <h2>Last Login: {lastLogin}</h2>
          </div>
          <h2 style={{textAlign:'center'}}><Link to='/'>
              <Button text='Go Back' color='black'></Button>
          </Link> </h2> 
        </>
    )
}

export default Profile
