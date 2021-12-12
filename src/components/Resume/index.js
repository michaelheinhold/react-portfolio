import React from "react";
import { Button } from 'reactstrap';
import resumeImg from '../../assets/resume-img.png';
import resume from '../../assets/Michael Resume.pdf';

function Resume() {
  return(
    <div>
      <section className='alt-section row'>
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
    </div>
  )
}

export default Resume;