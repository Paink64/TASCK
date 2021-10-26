import Button from "../components/Button";

function Home() {
    const onClick = () =>{
        console.log('click')
    }
    return (
      <div className="Home">
       <h1>Home Page</h1>
       <Button color='gold' text='Create Project' 
        onClick={onClick}/>
       
      </div>
    );
  }
  
  export default Home;
  