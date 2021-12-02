import React from 'react';
import Button from './Button.js';
import { Link } from 'react-router-dom' ;
import firebase from './Firebase';
import { useState } from 'react';

//import users from '../App.js'
const Header = ({title}) => {
    const [currentuser, setUser] = useState();
    const [project, setIsOnProject] = useState();
    
    firebase.auth().onAuthStateChanged( (user) => {
        if(user) {
            setUser(user);
            const isOnProjectRef = firebase.database().ref('users/'+ user.uid);
            
            isOnProjectRef.get().then((snapshot) => {
                const data = snapshot.val();
                setIsOnProject(data.isOnProject);
            })
        }
    }
    )    

    return (
         <header className='header'>
            <div class="navLogo"></div>
            
            {currentuser ? 
            <Link to='/MyTasks'>
            <Button text={project ? 'Tasks' : 'No Tasks'} 
                color={project ? 'gold' : 'black'} />
            </Link> 
            : <Button text={ 'Unavailable'} 
            color={'black'} />}

            <Link to='/Projects_Page'>
            <Button text={project ? 'Projects' : 'Start Project'}
                color= 'gold'/>
            </Link>
            
            {currentuser ? 
            <Link to='/Profile'>
            <Button text={'Profile/Skills'}
                color={'gold'}/>
            </Link> 
            :
            <Button text={'unavailable'}
                color={'black'}/>
            }
            

            <Link to={currentuser ? '/Signout' : '/Login'}>
            <Button text={currentuser ? 'Sign Out' : 'Login / Sign up'}
                color='gold'/>
            </Link>

         </header>
    )
}

export default Header
