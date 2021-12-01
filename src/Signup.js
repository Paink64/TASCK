import React from 'react'
import Button from './components/Button.js';
import { useState } from "react";
import { Link, Redirect } from 'react-router-dom' ;
import users from './App';
import firebase from './components/Firebase';
import { useHistory } from 'react-router-dom';
import userDummy from './components/User';

const Signup = ({User}) => {
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
                            projectIDs:[null],
                            tasks: [null],
                            userId: user.uid,
                            userName: userName.value,
                            lastLogin: Date.now()
                        })
                        userDummy.email = email.value;
                        userDummy.name = fullName.value;   
                        userDummy.username = userName.value;
                        userDummy.isOnProject =  false;
                        userDummy.isLoggedOn =  true;
                        userDummy.tasks =  [null];
                        userDummy.projectIDs =  [null];
                        userDummy.lastLogin = Date.now();
                        history.push('/Profile');
                    }
                    });
            }} text='Sign up' color='gold'/>
            <Link to='/Signup'>
                <Button text="Don't have an accout? Sign up" color='gold'></Button>
            </Link>
        </div>
    )
}

export default Signup
