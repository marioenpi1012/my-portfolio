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
import TopArrow from './components/ui/TopArrow'
function App() {
  const [loading,setLoading] = useState()
  const [show,setShow] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
    window.addEventListener('scroll', showFunction, false)
    return ()=>{
      window.removeEventListener('scroll',showFunction, false)
    }
  },[])
  const location = useLocation()
  const showFunction = () =>{
    const yPos = window.scrollY;
    const isScrollingDown = yPos > lastYPos;
    if(yPos > (window.innerHeight) & isScrollingDown){
      console.log(window.innerHeight)
      setShow(true)
    }else{
      setShow(false)
    }
    setLastYPos(yPos)
  }
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
    <TopArrow show={show} />
    <Footer />
    </div>
    
  );
  }
export default App;
