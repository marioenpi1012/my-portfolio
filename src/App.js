import Navbar from './components/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {HashRouter as Router, Route,} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import Project from './components/Project'
import './assets/global.scss'
import Home from './pages/home/Home'
function App() {
  return (

    <Router>
      <Helmet>
        <title>Mario Pineda</title>
      </Helmet>
      <div className="App">
        <Navbar  />
        <Route path="/" exact> <Home/> </Route>
        <Route path='/projects' component={Projects} />
        <Route path='/about'   component={About} />
        <Route path='/contact'  component={Contact} />
      </div>
    </Router>
    
  );
  }
export default App;
