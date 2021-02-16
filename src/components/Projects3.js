import React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  imagesAvatars,
  imagesPanels,
  imagesBadges,
  imagesEmotes,
  imagesOverlaysWaterDeep,
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
              items={imagesOverlayVanessa}
              autoPlay={true}
              thumbnailPosition='right'
              slideInterval={5000}
            />
            <ImageGallery
              items={imagesOverlaysWaterDeep}
              autoPlay={true}
              thumbnailPosition='right'
              slideInterval={5000}
            />
          </div>
        </div>

        <div className='gallery-container__gallery--small'>
          <h1>Twitch Badges</h1>
          <ImageGallery
            items={imagesBadges}
            thumbnailPosition='bottom'
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>

        <div className='gallery-container__gallery--small'>
          <h1>Twitch Emotes</h1>
          <ImageGallery
            items={imagesEmotes}
            thumbnailPosition='bottom'
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>
        <div className='gallery-container__gallery'>
          <h1>Twitch Panels</h1>
          <ImageGallery
            items={imagesPanels}
            thumbnailPosition='right'
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects3;
