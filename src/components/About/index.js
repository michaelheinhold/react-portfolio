import React from "react";
import './style.css';

function About() {
  return(
    <div>
      <section className='section section-1 row'>
        <div className='col-8'>
          <div className='title'>
            <h2 className='title_text'>About Me</h2>
            <p className='title_content'>I love Stuff, Stuff, 
              <br />
              and Stuff.
            </p>
          </div>
        </div>
        <div className='col-4'>
          test
        </div>
      </section>
      <section className='section section-2 s-white'>Page 2
        <div className='row'>
          <div className='col-6'>
            test
          </div>
          <div className='col-6'>
            test
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;