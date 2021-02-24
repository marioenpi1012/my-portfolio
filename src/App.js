import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {HashRouter as Router, Route,} from 'react-router-dom'
import {Helmet} from 'react-helmet'

function App() {
  return (

    <Router>
      <Helmet>
        <title>My Portfolio</title>
      </Helmet>
      <div className="App">
        <Navbar  />
        <Route path="/" exact> <Body /> <Projects />  </Route>
        <Route path='/about'   component={About} />
        <Route path='/contact'  component={Contact} />
        <Footer />
      </div>
    </Router>
    
  );
  }
export default App;
