import React from 'react';
import Button from './Button.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom' ;
import MyTasks from '../MyTasks';
import userDummy from './User';

//import users from '../App.js'
const Header = ({title, user}) => {
    userDummy.isLoggedOn = userDummy.isLoggedOn;
    return (
         <header className='header' style={{ backgroundColor : 'grey'}} >
            <h1>{title}</h1>
            <Link to='/MyTasks'>
            <Button text={user.isOnProject ? 'Tasks' : 'Unavailable'} 
                color={user.isOnProject ? 'gold' : 'black'} />
            </Link>

            <Link to='/Projects_Page'>
            <Button text={user.isOnProject ? 'Projects' : 'Start Project'}
                color= 'gold'/>
            </Link>
            
            <Link to='/Profile'>
            <Button text={userDummy.isLoggedOn ? 'Profile/Skills' : 'unavailable'}
                color={userDummy.isLoggedOn ? 'gold' : 'black'}/>
            </Link>

            <Link to={userDummy.isLoggedOn ? '/Signout' : '/Login'}>
            <Button text={userDummy.isLoggedOn ? 'Sign Out' : 'Login / Sign up'}
                color='gold'/>
            </Link>

         </header>
    )
}

export default Header
