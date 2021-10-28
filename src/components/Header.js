import React from 'react';
import Button from './Button.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom' ;
import MyTasks from '../MyTasks';
//import users from '../App.js'

const Header = ({title, user}) => {
    return (
         <header className='header' style={{ backgroundColor : 'grey'}} >
            <h1>{title}</h1>
            <Link to='/MyTasks'>
            <Button text={user.isOnProject ? 'Tasks' : 'Unavailable'} 
                color={user.isOnProject ? 'gold' : 'black'} />
            </Link>

            <Link to='/Profile'>
            <Button text={user.isOnProject ? 'Profile/Skills' : 'unavailable'}
                color={user.isOnProject ? 'gold' : 'black'}/>
            </Link>

            <Link to='/Projects_Page'>
            <Button text={user.isOnProject ? 'Projects' : 'Start Project'}
                color= 'gold'/>
            </Link>


         </header>
    )
}

export default Header
