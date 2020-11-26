import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import imageData from '../imgData/imageData';

const Projects = () => {
  useEffect(() => {
    console.log(imageData);
  });

  return (
    <div id='projects'>
      <h1>Freelance Projects</h1>
      <p>
        Contract freelance work with a focus on Twitch, digital marketing and
        business identity. In my free time I do traditional life drawing and
        freehand sketching.
      </p>
      <p>
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
      <h2>Avatars</h2>
      <Grid container justify='center'>
        {imageData.map((image) => {
          if (image.category === 'avatar') {
            return (
              <Grid item key={image.id} xs={4}>
                <img
                  className='gallery-image gallery-image--avatar'
                  src={image.src}
                />
              </Grid>
            );
          }
        })}
      </Grid>
      <h2>Panels</h2>
      <Grid container spacing={1}>
        {imageData.map((image) => {
          if (image.category === 'panel') {
            return (
              <Grid item key={image.id} item xs={6} sm={3}>
                <img src={image.src} />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default Projects;
