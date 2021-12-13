import React from "react";
import './style.css';
import meImage from '../../assets/me.jpg';
import coolImg from '../../assets/cool.jpg';

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
        <div className='about-content row'>
          <div className='whoiam col-2'>
            WHO I AM |
          </div>
          <div className='whoiam-body col-6'>
            I was Born in 1998, in Salt Lake Utah. When I was ten my family moved out to Georgia, where I had many good experiences and made lots of new friends. After serving a two 
            year church mission in Arizona, I'm back in Utah. In June, I married the love of my life, Lisa, and we have made many good memories and gone on many adventures already.
          </div>
        </div>
        <div className='row about-content'>
          <div className='col-2 whoiam'>
            PASSION |
          </div>
          <div className='col-4 whoiam-body'>
            I love doing anything outdoors, Star Wars, learning, and of course coding. 
            Ever since starting a web development boot camp through the University of Utah, I have become very passionate about 
            development. It like, my other hobbies, is exciting and intriguing to me. I've already developed a lot of skills, and most importantly, learned how to learn how to code.
            <br />
            I dont plan on stopping.
          </div>
          <div className='me-wrapper col start'>
            <img src={coolImg} className='cool-img'></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;