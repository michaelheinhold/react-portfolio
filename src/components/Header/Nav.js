import React from "react";

function Nav(props) {
  const tabs = ['About me', 'Portfolio', 'Contact Me', 'Resume']
  return(
    <div>
      <ul className="navbar-nav">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
          </li>
      ))}
      </ul>
    </div>
  )
}

export default Nav;