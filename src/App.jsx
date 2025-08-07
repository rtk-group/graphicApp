import React, { useState } from 'react';
import './App.css'


import {Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    // <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                 <img src={'/images/alvess_logo.png'} className='w-30' alt="" />
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-900 hover:text-indigo-600">Home</Link>
                <Link to="/portfolio" className="text-gray-900 hover:text-indigo-600">Portfolio</Link>
                <Link to="/services" className="text-gray-900 hover:text-indigo-600">Services</Link>
                <Link to="/about" className="text-gray-900 hover:text-indigo-600">About</Link>
                <Link to="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  Contact
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {menuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden bg-white pb-3 px-4">
              <Link to="/" className="block py-2 text-gray-900 hover:text-indigo-600">Home</Link>
              <Link to="/portfolio" className="block py-2 text-gray-900 hover:text-indigo-600">Portfolio</Link>
              <Link to="/services" className="block py-2 text-gray-900 hover:text-indigo-600">Services</Link>
              <Link to="/about" className="block py-2 text-gray-900 hover:text-indigo-600">About</Link>
              <Link to="/contact" className="block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-center hover:bg-indigo-700 transition">
                Contact
              </Link>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    // </Router>
  );
};

export default App