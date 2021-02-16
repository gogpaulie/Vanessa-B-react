import React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  imagesAvatars,
  imagesAvatars2,
  imagesPanels,
  imagesBadges,
  imagesEmotes,
  imagesOverlaysWaterDeep,
  imagesOverlaysWaterDeep2,
  imagesOverlayVanessa,
} from '../imgData/imageData';

const Projects3 = () => {
  return (
    <div id='projects' className='projects'>
      <h1 className='projects__header'>Freelance Art</h1>
      <div className='gallery-container container'>
        <div className='gallery-container__gallery'>
          <h1>Twitch Avatars</h1>
          <ImageGallery
            items={imagesAvatars}
            thumbnailPosition='bottom'
            autoPlay={true}
            slideInterval={5000}
          />
        </div>

        <div className='gallery-container__gallery'>
          <h1>Twitch Overlays</h1>
          <div className='gallery-container__gallery--overlays'>
            <ImageGallery
              items={imagesOverlaysWaterDeep}
              autoPlay={true}
              thumbnailPosition='right'
              slideInterval={5000}
            />
            <ImageGallery
              items={imagesOverlaysWaterDeep2}
              autoPlay={true}
              thumbnailPosition='right'
              slideInterval={5000}
            />
            <ImageGallery
              items={imagesOverlayVanessa}
              autoPlay={true}
              thumbnailPosition='right'
              slideInterval={5000}
            />
          </div>
        </div>

        <div className='static-gallery'>
          <h1>More Avatars</h1>
          <div className='static-gallery__images--avatars2'>
            {imagesAvatars2.map((image) => (
              <img
                key={image.fullscreen}
                src={image.fullscreen}
                alt='Twitch badge'
              />
            ))}
          </div>
        </div>

        <div className='static-gallery'>
          <h1>Twitch Badges</h1>
          <div className='static-gallery__images'>
            {imagesBadges.map((image) => (
              <img
                key={image.fullscreen}
                src={image.fullscreen}
                alt='Twitch badge'
              />
            ))}
          </div>
        </div>

        <div className='static-gallery'>
          <h1>Twitch Emotes</h1>
          <div className='static-gallery__images'>
            {imagesEmotes.map((image) => (
              <img
                key={image.fullscreen}
                src={image.fullscreen}
                alt='Twitch emote'
              />
            ))}
          </div>
        </div>
        <div className='static-gallery'>
          <h1>Twitch Panels</h1>
          <div className='static-gallery__images'>
            {imagesPanels.map((image) => (
              <img
                key={image.fullscreen}
                src={image.fullscreen}
                alt='Twitch Panel'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects3;
