import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link, Redirect } from 'react-router-dom' ;
import users from './App';
import firebase from './components/Firebase';
import userDummy from './components/User';
import { useHistory } from 'react-router-dom';
const Login = () => {
    let history = useHistory();
    return (
        <div>
            <input type="email" placeholder="Email..." id="emailField" />
            <input type="password" placeholder="Password..." id="passwordField" />
            <Button onClick={() => {
                const auth = firebase.auth();
                var email = document.getElementById("emailField");
                var password = document.getElementById("passwordField");
                auth.signInWithEmailAndPassword(email.value,password.value);
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        firebase.database().ref('/users/' + user.uid).on('value',function(snapshot) {
                            userDummy.name = snapshot.val().full_name;
                            userDummy.email =  snapshot.val().email;
                            userDummy.username =  snapshot.val().userName;
                            userDummy.userId =  snapshot.val().userId;
                        })
                        
                        history.push('/Profile');
                        userDummy.isLoggedOn =  true;
                        userDummy.lastLogin = Date.now();
                    }
                    });
            }} text='Login' color='gold'/>
            <Link to='/Signup'>
                <Button text="Don't have an accout? Sign up" color='gold'></Button>
            </Link>
        </div>
    )
}

export default Login
