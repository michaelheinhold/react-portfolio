import React from "react";
import './style.css';

function Intro(props) {

  return(
    <div  className='fullpage'>
      <div>
        <section className='section section-1 row'>
          <div className='col-8'>
            <div className='title'>
              <h2 className='title_text'>MICHAEL
                <br />
                HEINHOLD
              </h2>
              <p className='title_content'>web designer / 
                <br />
                student
              </p>
            </div>
          </div>
          <div className='col-4'>
            test
          </div>
        </section>
        <section className='section-2 section portfolio'>
          <div className='col-8 sec-content'>
            <h2 className='title_text'>
              What I Do
            </h2>
            <p className='title_content'>
              I make high
              <br />
              quality websites
            </p>
            <button className='page-btn' onClick={() => {
              props.handlePageChange('Portfolio');
              window.scrollTo(0,0);
            }}>see my projects</button>
          </div>
        </section>
        <section className='section-3 section about'>
          <div className='col-8 sec-content'>
            <h2 className='title_text'>
              About Me
            </h2>
            <p className='title_content'>
              I love Improving, learning,
              <br />
              and Coding.
            </p>
            <button className='page-btn' onClick={() => {
              window.scrollTo(0,0);
              props.handlePageChange('About Me');
            }}>learn more about me</button>
          </div>
        </section>
        <section className='section-4 section contact'>
        <div className='col-8 sec-content'>
            <h2 className='title_text'>
              Get In Touch
            </h2>
            <p className='title_content'>
              Reach out with any
              <br />
              questions
            </p>
            <button className='page-btn' onClick={() => {
              props.handlePageChange('Contact Me');
              window.scrollTo(0,0);
            }}>say hi</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Intro;