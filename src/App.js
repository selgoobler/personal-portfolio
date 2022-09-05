import React from 'react';
import {
  BrowserRouter as Router, // <-- (1) import router
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Experience from './components/Experience';
import NotFound from './components/NotFound'

import logo from './images/smile.png';

function App() {
  // const location = useLocation();
  return (
    <div className='App'>
      <Router>
        <NavigationBar />
        <AnimatePresence>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
