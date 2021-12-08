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
        document.title = 'About Me | MICHAEL HEINHOLD'
        return ( <About /> );
      case 'Portfolio':
        document.title = 'Portfolio | MICHAEL HEINHOLD'
        return ( <Portfolio /> );
      case 'Contact Me':
        document.title = 'Contact Me | MICHAEL HEINHOLD'
        return ( <Contact /> );
      case 'Resume':
        document.title = 'Resume | MICHAEL HEINHOLD'
        return ( <Resume /> );
      default:
        return ( <Intro currentPage={currentPage} handlePageChange={handlePageChange} /> );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      { renderPage() }
      <Footer />
    </div>
  );
}

export default App;
