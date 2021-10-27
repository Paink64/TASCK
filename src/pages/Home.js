import Button from "../components/Button";

const  Home = () =>  {
    const onClick = () =>{
        console.log('Click')
    }
    return (
      <div className="Home">
       <h1>Home Page</h1>
       <Button color='gold' text='Create Project' 
        onClick={onClick}
        />
       
      </div>
    );
  }
  
  export default Home;
  