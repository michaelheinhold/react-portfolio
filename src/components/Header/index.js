import React from "react";
import Nav from './Nav';
import './style.css';


function Header(props) {
  const {
    currentPage,
    handlePageChange
  } = props

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <div>
          <a 
          className={`navbar-brand name ${props.navbar && 'txt-black'}`} 
          href="/react-portfolio"
          onClick={() => props.handlePageChange('Intro')}
          >
            Michael Heinhold
          </a>
        </div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} navbar={props.navbar} />
      </div>
    </nav>
  )
}

export default Header;