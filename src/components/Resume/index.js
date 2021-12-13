import React from "react";
import resumeImg from '../../assets/resume-img.png';
import resume from '../../assets/Michael Resume.pdf';
import './style.css';
import lantern from '../../assets/lantern-festival.jpg'

function Resume() {
  return(
    <div>
      <section className='alt-section section row'>
        <div className='col-6'>
          <div className='title'>
            <h2 className='title_text'>Resume</h2>
            <p className='title_content'>
              Download a copy of
              <br />
              my Resume.
            </p>
            <a className='page-btn' href={resume} download='Michael Resume.pdf'><span></span>Download</a>
          </div>
        </div>
        <div className='col-6'>
          <img src={resumeImg} className='resume start'></img>
        </div>
      </section>
      <section className='section section-2 s-white'>
        <div className='about-content row'>
          <div className='whoiam col-2'>
            SKILLSETS |
          </div>
          <div className='whoiam-body col-4'>
            <span className='whoiam'>JavaScript</span>
            <br />
            <span className='whoiam'>Node / Express</span>
            <br />
            <span className='whoiam'>React</span>
          </div>
          <div className='whoiam-body col-4'>
            <span className='whoiam'>HTML / CSS</span>
            <br />
            <span className='whoiam'>Adobe Illustrator</span>
            <br />
            <span className='whoiam'>MongoDB / SQL</span>
          </div>
        </div>
        <div className='lantern-wrapper'><img src={lantern} className='lantern-img start'></img></div>
      </section>
    </div>
  )
}

export default Resume;