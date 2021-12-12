import React from "react";
import Project from "./Project";
import './style.css';
import codingImage from '../../assets/Screenshot (19).png';

function Portfolio() {
  const projects = [
    {
      name: 'Flix Fix',
      link: 'https://pure-falls-88054.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/group-project-2'
    },
    {
      name: 'Note Taker',
      link: 'https://heinholdnote-taker.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/note-taker'
    },
    {
      name: 'Tech Blog',
      link: 'https://warm-savannah-79390.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/tech-blog'
    },
    {
      name: 'Git-N-Shape',
      link: 'https://austinxewell.github.io/git-n-shape/',
      github: 'https://github.com/austinxewell/git-n-shape'
    },
    {
      name: 'Budget Tracker',
      link: 'https://pacific-earth-05931.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/budget-tracker'
    },
    {
      name: 'Weather Dashboard',
      link: 'https://michaelheinhold.github.io/weather-dashboard/',
      github: 'https://github.com/michaelheinhold/weather-dashboard'
    }
  ]

  return(
    <div>
      <section className='section section-1 row'>
        <div className='col-8 sec-content-title'>
            <h2 className='title_text'>Portfolio</h2>
            <p className='title_content'>
              I make high
              <br />
              quality websites
            </p>
        </div>
        <div className='col-4'>
          <div className='image-whatido'>
            <img src={codingImage} className={`whatido-img start title-img`}></img>
          </div>
        </div>
      </section>
      <section className='section section-2 s-white'>
        <div className='project-board row'>
          {projects.map(project => {
            return (
              <Project name={project.name} link={project.link} github={project.github} />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio;