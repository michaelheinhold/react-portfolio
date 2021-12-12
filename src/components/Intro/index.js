import React, { useEffect, useState } from "react";
import './style.css';
import codingImage from '../../assets/Screenshot (19).png';
import lanternImage from '../../assets/lantern-festival.jpg';
import meImage from '../../assets/me.jpg';
import ramp from '../../assets/vatican-ramp.jpg';

function Intro(props) {
  const [page1Start, setPage1Start] =useState(false);
  const [page2Start, setPage2Start] =useState(false);
  const [page3Start, setPage3Start] =useState(false);

  const animateImages = ()=> {
    if (window.scrollY >= window.innerHeight * 3){
      setPage3Start(true);
      setPage2Start(false);
      setPage1Start(false);
    } else if (window.scrollY >= window.innerHeight * 2){
      setPage3Start(false);
      setPage2Start(true);
      setPage1Start(false);
    } else if (window.scrollY >= window.innerHeight) {
      setPage3Start(false);
      setPage2Start(false);
      setPage1Start(true);
    } else {
      setPage3Start(false);
      setPage2Start(false);
      setPage1Start(false);
    }
  }

  window.addEventListener('scroll', animateImages)

  return(
    <div  className='fullpage'>
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
        </div>
      </section>
      <section className='section-2 section portfolio row'>
        <div className='col-8 sec-content'>
          <h2 className='title_text'>
            What I Do
          </h2>
          <p className='title_content'>
            I make high
            <br />
            quality websites
          </p>
          <a className='page-btn' onClick={() => {
            props.handlePageChange('Portfolio');
            window.scrollTo(0,0);
          }}>see my projects</a>
        </div>
        <div className='col-4'>
          <div className='image-whatido'>
            <img src={codingImage} className={`whatido-img ${page1Start && 'start'}`}></img>
          </div>
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
          <a className='page-btn' onClick={() => {
            window.scrollTo(0,0);
            props.handlePageChange('About Me');
          }}>learn more about me</a>
        </div>
        <div className='col-4'>
          <div className='image-me'>
            <img src={meImage} className={`me-img ${page2Start && 'start'}`}></img>
          </div>
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
          <a className='page-btn' onClick={() => {
            props.handlePageChange('Contact Me');
            window.scrollTo(0,0);
          }}>say hi</a>
        </div>
        <div className='col-4'>
          <div className='image-contact'>
            <img src={ramp} className={`contact-img ${page3Start && 'start'}`}></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;