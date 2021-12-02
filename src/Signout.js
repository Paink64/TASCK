import React from 'react'
import { Redirect } from 'react-router-dom' ;
import firebase from './components/Firebase';
import userDummy from './components/User';


const Signout = () => {
        const auth = firebase.auth().signOut();
        return <Redirect to='/login'/>;
}

export default Signout
