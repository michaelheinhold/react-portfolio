import React from "react";
import Project from "./Project";
import './style.css';
import codingImage from '../../assets/Screenshot (19).png';
import budget from '../../assets/budget.png';
import flix from '../../assets/flix-fix.png';
import gitnshape from '../../assets/gitnshape.png';
import note from '../../assets/note.png';
import techblog from '../../assets/techblog.png';
import weather from '../../assets/weather.png';

function Portfolio() {
  const projects = [
    {
      name: 'Tomodachi',
      link: 'https://tomodachi-sadboitay.herokuapp.com/',
      github: 'https://github.com/Johnson90cm/Tomodachi',
      image: 'tomodachi'
    },
    {
      name: 'Flix Fix',
      link: 'https://pure-falls-88054.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/group-project-2',
      image: 'flix-fix'
    },
    {
      name: 'Tech Blog',
      link: 'https://warm-savannah-79390.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/tech-blog',
      image: 'techblog'
    },
    {
      name: 'Git-N-Shape',
      link: 'https://austinxewell.github.io/git-n-shape/',
      github: 'https://github.com/austinxewell/git-n-shape',
      image: 'gitnshape'
    },
    {
      name: 'Budget Tracker',
      link: 'https://pacific-earth-05931.herokuapp.com/',
      github: 'https://github.com/michaelheinhold/budget-tracker',
      image: 'budget'
    },
    {
      name: 'Weather Dashboard',
      link: 'https://michaelheinhold.github.io/weather-dashboard/',
      github: 'https://github.com/michaelheinhold/weather-dashboard',
      image: 'weather'
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
              <Project name={project.name} link={project.link} github={project.github} image={project.image} />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio;