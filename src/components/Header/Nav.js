import React from "react";

function Nav(props) {
  const tabs = ['About Me', 'Portfolio', 'Contact Me', 'Resume'];

  return(
    <div>
      <ul className="navbar-nav collapsed">
      {tabs.map(tab => (
        <li className='nav-item' key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => {
              props.handlePageChange(tab);
              window.scrollTo(0,0);
            }}
            className={
              props.currentPage === tab || props.navbar ? 'nav-link active' : 'nav-link'
            }
          >
            {tab} |
          </a>
          </li>
      ))}
      </ul>
      <button className='hiddenUntilCollapse'>HELLO</button>
    </div>
  )
}

export default Nav;