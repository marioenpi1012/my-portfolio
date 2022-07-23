import Navbar from './components/Navbar'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import Footer from './components/Footer.jsx'
import {Route, useLocation, Routes} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import './assets/global.scss'
import Home from './pages/home/Home'
import { useEffect, useState } from 'react'
import Loading from './components/ui/Loading'
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
function App() {
  const [loading,setLoading] = useState()
  useEffect(()=>{
    setLoading(false)
    // setTimeout(()=>{
    //   setLoading(false)
    // },9000)
  },[])
  const location = useLocation()
  return (
    <div className="App">
    <Helmet>
    <title>Mario Pineda</title>
    </Helmet> 
    <Navbar  />
    <AnimatePresence>
      {loading && <Loading key='loading' />}
    </AnimatePresence>
    <AnimatePresence exitBeforeEnter >
      <Routes key={location.pathname} location={location}>
          <Route exact path='/' element={<Home />}>
            <Route path='/about' element={<About />} />
          </Route> 
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about'   element={<About />} />
          <Route path='/contact'  element={<Contact />} />
        </Routes>
    </AnimatePresence>
    
    <Footer />
    </div>
    
  );
  }
export default App;
