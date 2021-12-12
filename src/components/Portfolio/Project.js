import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardHeader
} from 'reactstrap'

function Project(props) {
  return (
    <div className='col-6 project'>
      <h2>{props.name}</h2>
      <a href={props.link} target='_blank'>Deployed app</a>
      <br />
      <a href={props.github} target='_blank'>GitHub</a>
    </div>
  );
}

export default Project;