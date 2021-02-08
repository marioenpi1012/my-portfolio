import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import Projects from './components/Projects'
import {HashRouter as Router, Route,} from 'react-router-dom'


function App() {
  <title>Hello</title>
  return (
    <Router>
      <div className="App">
        <Navbar  />
        <Route path="/" exact> <Body /> <Projects />  </Route>
        <Route path='/about'   component={About} />
        <Route path='/contact'  component={Contact} />
      </div>
    </Router>
    
  );
  }
export default App;
