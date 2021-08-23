import React from 'react';
import funky from '../assets/funky.jpg';
import simon from '../assets/simon.png';
import vanessa from '../assets/vanessa.PNG';

function About() {
  return (
    <div className='about' id='about'>
      <h1 className='about__header'>About Us</h1>
      <div className='about__container container'>
        <div className='about__card'>
          <div className='about__card--img-container'>
            <img className='about__card--img' src={simon} alt='avatar' />
          </div>
          <div className='about__card--author'>
            <h2 className='about__card--name'>Simon</h2>
            <h4 className='about__card--title'>Professional Winer</h4>
          </div>

          <p className='about__card--desc'>
            Simon is the residential purveyor of high fives, and ensures all of
            our kitty food products are not laced with fish-types (as he's
            allergic). Professional lounger and also on stream about 65% of the
            time. Loves everyone and everything.
          </p>
        </div>
        <div className='about__card'>
          <div className='about__card--img-container'>
            <img className='about__card--img' src={vanessa} alt='avatar' />
          </div>
          <div className='about__card--author'>
            <h2 className='about__card--name'>Vanessa</h2>
            <h4 className='about__card--title'>Designer</h4>
          </div>

          <p className='about__card--desc'>
            Vanessa "PleasantlyTwstd" has been involved in creative endeavors
            since the age of 7. Her original career path was for video game
            character concept and design, which then forked to data analytics
            and research. Her passions include art, design, color theory,
            crunching numbers, activism, charity, and challenge runs/speed runs
            on Twitch.
          </p>
        </div>
        <div className='about__card'>
          <div className='about__card--img-container'>
            <img
              className='about__card--img about__card--img-funky'
              src={funky}
              alt='avatar'
            />
          </div>

          <div className='about__card--author'>
            <h2 className='about__card--name'>Funky</h2>
            <h4 className='about__card--title'>Bathroom Chauffeur</h4>
          </div>

          <p className='about__card--desc'>
            Garfunkel 'Funky' Cat doesn't have time for bios and streams. He's a
            cat. Harbors immense love for his humans, until he isn't given his
            wet food. Appears on stream only if treats are involved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
