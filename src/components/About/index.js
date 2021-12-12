import React from "react";
import './style.css';
import meImage from '../../assets/me.jpg';

function About() {
  return(
    <div>
      <section className='section section-1 row'>
        <div className='col-8 sec-content-title'>
            <h2 className='title_text'>About Me</h2>
            <p className='title_content'>I love Improving, learning, 
              <br />
              and Coding.
            </p>
        </div>
        <div className='col-4'>
          <div className='image-me'>
            <img src={meImage} className={`me-img title-img start`}></img>
          </div>
        </div>
      </section>
      <section className='section section-2 s-white'>
        <div className='col-8'>
          Page 2
        </div>
      </section>
    </div>
  )
}

export default About;