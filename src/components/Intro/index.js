import React, { useCallback, useEffect, useState } from "react";
import './style.css';
import rocket from '../../assets/rocket.svg'

function Intro(props) {

  return(
    <div  className='fullpage'>
      <div>
        <section className='section-1 section'>
          <div>
            <img src={rocket} className='rocket-bg'></img>
          </div>
        </section>
        <section className='section-2 section portfolio'>
          <div>Page 2</div>
        </section>
        <section className='section-3 section about'>
          <div>Page 3</div>
        </section>
        <section className='section-4 section contact'>
        <div>Page 4</div>
        </section>
      </div>
    </div>
  );
}

export default Intro;