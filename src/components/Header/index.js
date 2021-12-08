import React, { useState } from "react";
import Nav from './Nav';
import './style.css';


function Header(props) {
  const {
    currentPage,
    handlePageChange
  } = props

  const [navbar, setNavbar] = useState(false);

  const changeNavText = () => {
    if ( window.scrollY >=  window.innerHeight){
      setNavbar(true);
    } else {
      setNavbar (false);
    }
  }

  window.addEventListener('scroll', changeNavText);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <div>
          <a 
          className={navbar ? 'navbar-brand name txt-black': 'navbar-brand name'} 
          href="#"
          onClick={() => props.handlePageChange('Intro')}
          >
            Michael Heinhold
          </a>
        </div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} navbar={navbar} />
      </div>
    </nav>
  )
}

export default Header;