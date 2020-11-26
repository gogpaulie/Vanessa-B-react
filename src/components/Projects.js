import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import imageData from '../imgData/imageData';

const Projects = () => {
  useEffect(() => {
    console.log(imageData);
  });

  return (
    <div id='projects' className='projects'>
      <h1 className='projects__header'>Freelance Projects</h1>
      <p className='projects__info'>
        Contract freelance work with a focus on Twitch, digital marketing and
        business identity. In my free time I do traditional life drawing and
        freehand sketching.
      </p>
      <p className='projects__info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
        consequuntur autem architecto nihil ratione error? Et impedit ut
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
        consequuntur autem architecto nihil ratione error? Et impedit ut
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
        consequuntur autem architecto nihil ratione error? Et impedit ut
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
      </p>
      <h2 className='projects__category'>Avatars</h2>
      <Grid container className='gallery-grid' justify='center'>
        {imageData.map((image) => {
          if (image.category === 'avatar') {
            return (
              <Grid item key={image.id} xs={3} spacing={2}>
                <img
                  className='gallery-grid__img--avatar'
                  src={image.src}
                  alt={image.category}
                />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
      <h2 className='projects__category'>Panels</h2>
      <Grid container spacing={1}>
        {imageData.map((image) => {
          if (image.category === 'panel') {
            return (
              <Grid item key={image.id} xs={3} sm={3}>
                <img src={image.src} alt={image.category} />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </div>
  );
};

export default Projects;
