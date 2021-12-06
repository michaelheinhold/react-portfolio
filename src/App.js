import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('Intro');

  const renderPage = () => {
    switch(currentPage) {
      case 'About Me':
        return ( <About /> );
      case 'Portfolio':
        return ( <Portfolio /> );
      case 'Contact Me':
        return ( <Contact /> );
      case 'Resume':
        return ( <Resume /> );
      default:
        return ( <Intro /> );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* { renderPage() } */}
      <Footer />
    </div>
  );
}

export default App;
