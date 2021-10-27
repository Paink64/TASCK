import Button from "../components/Button";
import Form from "../components/Form";
import { useState } from 'react'

const Home = () => {
  const [toggleButton, setToggle] = useState(false);

  const onClick = () => {
    console.log('Click')
    setToggle(toggleButton => !toggleButton)
  }


  return (
    <div className="Home">
      <h1>Home</h1>
      <Button color='gold' text='Create Project'
        onClick={onClick}
      />
      {toggleButton ? <Form /> : null}

    </div>
  );
}

export default Home;
