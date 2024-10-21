import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Service from './pages/Service';
import Dentist from './pages/Dentist';
import Contact from './pages/Contact';
import Log from './pages/Log';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

const App = () => {
  return (
    <main className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/dentist' element={<Dentist />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/appointment' element={<Log />}/>
        <Route path='/log' element={<Log />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
      <ScrollTop />
    </main>
  )
}

export default App
