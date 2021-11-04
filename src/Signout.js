import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link, Redirect } from 'react-router-dom' ;
import users from './App';
import firebase from './components/Firebase';
import userDummy from './components/User';


const Signout = ({user}) => {
        userDummy.name = null;
        userDummy.email =  null;
        userDummy.password =  null;
        userDummy.isOnProject =  false;
        userDummy.isLoggedOn =  false;
        userDummy.tasks =  [null];
        userDummy.projectIDs =  [null];
        const auth = firebase.auth();
        auth.signOut();
        return <Redirect to='/login'/>;
}

export default Signout
