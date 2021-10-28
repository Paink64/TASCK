import Projects from './components/Projects'
import Button from "./components/Button";
import Form from "./components/Form";
import { useState, useContext } from 'react'
import { ProjectContext } from './ProjectContext'

const Projects_Page =() => {
  const { projectData, setProject} = useContext(ProjectContext);
  const onClick = () => {
    console.log('Click')
    setToggle(toggleButton => !toggleButton)
  }

    const [toggleButton, setToggle] = useState(false);

  return (
    <div > 
      <h1 className='test'>My Projects</h1>
      <Button color='gold' text='Create Project'
        onClick={onClick} />
      {toggleButton ? <Form /> : null}
      
{console.log(projectData.this)}
      
        <div className='container'><Projects /></div> 
    </div>
  );
}

export default Projects_Page;