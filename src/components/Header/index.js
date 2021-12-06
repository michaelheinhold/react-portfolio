import React from "react";
import Nav from './Nav';
import './style.css'

function Header(props) {
  const {
    currentPage,
    handlePageChange
  } = props

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand name" href="#">Michael Heinhold</a>
        </div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </nav>
  )
}

export default Header;