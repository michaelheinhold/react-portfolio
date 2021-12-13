import React from "react";


function Project(props) {
  const image = require(`../../assets/${props.image}.png`).default
  return (
    <div className='col-4 project'>
      <div style={{ backgroundImage : `url(${image})`, height : '60px'}}></div>
      <h2 className ='' style={{ backgroundColor : '#fff', borderRadius : '20%'}}>{props.name}</h2>
      <a href={props.link} target='_blank' className='proj-link' style={{ backgroundColor : '#fff'}}>Deployed app </a>
      |
      <a href={props.github} target='_blank' className='proj-link' style={{ backgroundColor : '#fff'}}> GitHub</a>
    </div>
  );
}

export default Project;