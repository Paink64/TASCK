import Projects from './components/Projects'
import Button from "./components/Button";
import Form from "./components/Form";
import { useState } from 'react'

const Projects_Page =() => {

  const onClick = () => {
    console.log('Click')
    setToggle(toggleButton => !toggleButton)
  }

    const [toggleButton, setToggle] = useState(false);

  return (
    <div >
     <h1>My Projects</h1>
     <Button color='gold' text='Create Project'
        onClick={onClick}/>
      {toggleButton ? <Form /> : null}
          <div className='container'>
            <Projects />
          </div>
    </div>
  );
}

export default Projects_Page;