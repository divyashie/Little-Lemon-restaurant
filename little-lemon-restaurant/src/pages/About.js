import React from 'react'; 
import './About.styles.css';

import collab1 from '../images/collab1.jpg'; 
import collab2 from '../images/collab2.jpg'; 

function About(){
    return(
        <section name='about' className='about'>
        <div className='about-container'>
          <h1 className='about-title'>Little Lemon</h1>
          <h2 className='about-subtitle'>Chicago</h2>
          <p className='about-text'>
          Little Lemon began with two Italian brothers, Mario and Adrian Romano, who left their coastal hometown near Naples to open their dream restaurant in America. Mario shapes their menu using cherished family recipes and his experience as a chef in Italy, while Adrian handles the restaurant's marketing and successfully broadened their offerings to embrace dishes from across the Mediterranean.            <br />
          <br />
          </p>
        </div>
        <div className='about-image-container'>
          <div className='about-container-one'>
            <img
              src={collab1}
              alt='Mario and Adrian 1'
              className='about-image-one'
            />
          </div>
          <div className='about-container-two'>
            <img
              src={collab2}
              alt='Mario and Adrian 2'
              className='about-image-two'
            />
          </div>
        </div>
      </section>
    );
}

export default About; 