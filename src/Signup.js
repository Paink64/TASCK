import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link, Redirect } from 'react-router-dom' ;
import users from './App';
import firebase from './components/Firebase';
import { useHistory } from 'react-router-dom';
import userDummy from './components/User';

const Signup = () => {
    let history = useHistory();
    return (
        <div>
            <input type="fullName" placeholder="Name..." id="fullNameField" />
            <input type="userName" placeholder="Username..." id="userNameField" />
            <input type="email" placeholder="Email..." id="emailField" />
            <input type="password" placeholder="Password..." id="passwordField" />

            <Button onClick={() => {
                const auth = firebase.auth();
                var fullName = document.getElementById("fullNameField");
                var userName = document.getElementById("userNameField");
                var email = document.getElementById("emailField");
                var password = document.getElementById("passwordField");
                auth.createUserWithEmailAndPassword(email.value,password.value);
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        firebase.database().ref('/users/' + user.uid).set({
                            email: email.value,
                            full_name: fullName.value,
                            projectIDs:[],
                            tasks: [],
                            userId: user.uid,
                            userName: userName.value,
                            lastLogin: Date.now(),
                            isOnProject: false
                        })
                        //ignore this, I just used it to add tasks to database
                        //var TASKS = firebase.database().ref('tasks/').push().set('task 1 placeholder');
                        history.push('/Profile');
                    }
                    });
            }} text='Sign up' color='gold'/>
            <Link to='/Login'>
                <Button text="Already have an accout? Log In" color='gold'></Button>
            </Link>
        </div>
    )
}

export default Signup
