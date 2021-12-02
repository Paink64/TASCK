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
<form className="register-form">
               
               <label>Sign up</label>
           <input
               id="fullNameField"
               className="form-field"
               type="text"
               placeholder="Name"/>
           

           <input
               id="userNameField"
               className="form-field"
               type="text"
               placeholder="Username"/>

            <input
               id="emailField"
               className="form-field"
               type="text"
               placeholder="Email"/>
           

           <input
               id="passwordField"
               className="form-field"
               type="password"
               placeholder="Password"/>

       </form>
            <Button onClick={() => {
                const auth = firebase.auth();
                var fullName = document.getElementById("fullNameField");
                var userName = document.getElementById("userNameField");
                var email = document.getElementById("emailField");
                var password = document.getElementById("passwordField");
                auth.createUserWithEmailAndPassword(email.value,password.value)
                .catch(err => {
                    alert(err.message);
                });
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
                        userDummy.uid = user.uid;
                        userDummy.email = email.value;
                        userDummy.name = fullName.value;   
                        userDummy.username = userName.value;
                        userDummy.isOnProject =  false;
                        userDummy.isLoggedOn =  true;
                        userDummy.tasks =  [null];
                        userDummy.projectIDs =  [null];
                        userDummy.lastLogin = Date.now();
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
