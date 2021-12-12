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
  
  const [navbar, setNavbar] = useState(false);

  const changeNavText = () => {
    if (currentPage === 'Intro') {
      setNavbar(false);
    } else if ( window.scrollY >=  window.innerHeight){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeNavText);

  const renderPage = () => {
    switch(currentPage) {
      case 'About Me':
        document.title = 'About Me | MICHAEL HEINHOLD'
        return ( 
          <div>
            <About />
            <Footer />
          </div>
        );
      case 'Portfolio':
        document.title = 'Portfolio | MICHAEL HEINHOLD'
        return ( 
          <div>
            <Portfolio />
            <Footer />
          </div>
        );
      case 'Contact Me':
        document.title = 'Contact Me | MICHAEL HEINHOLD'
        return ( <Contact /> );
      case 'Resume':
        document.title = 'Resume | MICHAEL HEINHOLD'
        return ( <Resume /> );
      default:
        return ( 
          <div>
            <Intro currentPage={currentPage} handlePageChange={handlePageChange} />
            <Footer />
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} navbar={navbar} setNavbar={setNavbar} />
      { renderPage() }

    </div>
  );
}

export default App;
