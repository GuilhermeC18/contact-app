
// react hooks
import { useState, useEffect } from 'react';

//Router 
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

//Pages
import Homepage from './pages/homepage';
import AboutMe from './pages/about';
import Contact from './pages/contact';
import ProjectsPage from './pages/projects';
import Login from './pages/login';
import AdminDashboard from './pages/adminDashboard';
import ErrorBoundary from './pages/errorBoundary';


export default function App(){
  const [Projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    fetch('/api/user/')
      .then(res => res.json())
      .then((Projects) =>{
        console.log(Projects, "Projects")
        setProjects(Projects)
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage Projects={Projects} />
          </Route>
          <Route exact path='/about'>
            <AboutMe />
          </Route>
          <Route exact path='/projects'>
            <ProjectsPage Projects={Projects} />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/admin/login'>
            <Login />
          </Route>
          <Route exact path='/admin/dashboard'>
            <AdminDashboard />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}
