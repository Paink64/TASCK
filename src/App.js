import './index.css';
import { useState } from 'react'
import Home from './pages/Home';
import Nav from './pages/Nav';
import Tasks from './pages/Tasks';
import Projects_Page from './pages/Projects_Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProjectContext } from './Contexts/ProjectContext';

const App = () => {
  const [projectData, setProjects] = useState([
    {
      id: 1,
      title: 'Software Engineering Project',
      due: 'October 26th, 2021',
    },

  ])


  return (
    <Router>
      <div className="App">
        <Nav />
        <ProjectContext.Provider value={{ projectData, setProjects }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects_Page} />
            <Route path="/tasks" component={Tasks} />
          </Switch>
        </ProjectContext.Provider>
      </div>
    </Router>
  );
}

export default App;
