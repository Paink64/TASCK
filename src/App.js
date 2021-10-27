import './index.css';
import Home from './pages/Home';
import Nav from './pages/Nav';
import Tasks from './pages/Tasks';
import Projects_Page from './pages/Projects_Page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> 
          <Route path="/" exact   component={Home} />
          <Route path="/projects" component={Projects_Page}/>
          <Route path="/tasks"    component={Tasks}/>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
