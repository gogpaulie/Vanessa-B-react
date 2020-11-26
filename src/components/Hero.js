import React from 'react';
import Typography from '@material-ui/core/Typography';

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <Typography className='hero__title' variant='h2' component='h2'>
          Vanessa Brasfield
        </Typography>
        <Typography className='hero__title--sub' variant='h4' component='h4'>
          Graphic Design
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
