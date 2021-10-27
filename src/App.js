import './index.css';
import Home from './pages/Home';
import Nav from './pages/Nav';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Button from './components/Button';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
          <Route path="/" exact   component={Home} />
          <Route path="/projects" component={Projects}/>
          <Route path="/tasks"    component={Tasks}/>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
