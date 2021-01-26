import React from 'react';
import ImageGallery from 'react-image-gallery';

const imagesAvatars = [
  {
    original: 'https://live.staticflickr.com/65535/50689231196_2fe86774d0.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689231196_2fe86774d0_t.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689231196_22eb18d4fe_o.png',
    description: 'Render custom slides within the gallery',
  },
  {
    original: 'https://live.staticflickr.com/65535/50689231916_e79c830e18.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689231916_e79c830e18_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689231916_bfb00a36dc_o.png',
  },
  {
    original: 'https://live.staticflickr.com/65535/50689230256_cb15ff72d6.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689230256_cb15ff72d6_t.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689230256_5608218216_o.png',
  },
  {
    original: 'https://live.staticflickr.com/65535/50689309107_3ce3fac0fc.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689309107_3ce3fac0fc_t.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689309107_ec653b8c22_o.png',
  },
];

const imagesPanels = [
  {
    original:
      'https://live.staticflickr.com/65535/50688578543_0318400767_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50688578543_0318400767_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50688578543_0318400767_o.png',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689327681_54fd6dc7cb_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689327681_54fd6dc7cb_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689327681_54fd6dc7cb_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689401702_574c700602_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689401702_574c700602_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689401702_574c700602_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689402762_1db06b7172_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689402762_1db06b7172_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689402762_1db06b7172_o.png',
  },
];

const imagesBadges = [
  {
    original:
      'https://live.staticflickr.com/65535/50689447157_3db981ca42_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689447157_3db981ca42_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689447157_3db981ca42_o.png',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688616503_8302d8859c_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50688616503_8302d8859c_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50688616503_8302d8859c_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688615928_8fb8604ebd_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50688615928_8fb8604ebd_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50688615928_8fb8604ebd_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689362751_e7c616535f_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689362751_e7c616535f_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689362751_e7c616535f_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689447982_8ccd7b5199_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689447982_8ccd7b5199_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689447982_8ccd7b5199_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689359316_2af9849df7_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689359316_2af9849df7_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689359316_2af9849df7_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688614098_54ee45e3d1_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50688614098_54ee45e3d1_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50688614098_54ee45e3d1_o.png',
  },
];

const imagesEmotes = [
  {
    original:
      'https://live.staticflickr.com/65535/50688679058_7728b4d4d8_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50688679058_7728b4d4d8_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50688679058_7728b4d4d8_o.png',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689504237_21b7dc223c_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689504237_21b7dc223c_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689504237_21b7dc223c_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689504812_0366cfc4c6_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689504812_0366cfc4c6_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689504812_0366cfc4c6_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689508722_db6705fcd4_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689508722_db6705fcd4_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689508722_db6705fcd4_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689422651_a5d6bb8aa7_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689422651_a5d6bb8aa7_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689422651_a5d6bb8aa7_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689426046_357e269372_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50689426046_357e269372_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50689426046_357e269372_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688677673_5a87bb6e9c_o.png',
    thumbnail:
      'https://live.staticflickr.com/65535/50688677673_5a87bb6e9c_o.png',
    fullscreen:
      'https://live.staticflickr.com/65535/50688677673_5a87bb6e9c_o.png',
  },
];

const imagesOverlays = [
  {
    original:
      'https://live.staticflickr.com/65535/50688717783_750bc975c3_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50688717783_750bc975c3_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50688717783_748b7faf7c_o.png',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688717053_01f3d07075_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50688717053_01f3d07075_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50688717053_b61fa5774c_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689547367_a932408263_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689547367_a932408263_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689547367_e43933fa6c_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688715833_7ca78dd660_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50688715833_7ca78dd660_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50688715833_3a5ec3b72b_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689544987_2ee998b1fb_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689544987_2ee998b1fb_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689544987_7a4df05fa0_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50689543192_375e36f258_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50689543192_375e36f258_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50689543192_795eae1da2_o.png',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50688710413_66f75551a9_z.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50688710413_66f75551a9_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50688710413_a4a1d68fc7_o.png',
  },
];

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
          <ImageGallery
            items={imagesOverlays}
            autoPlay={true}
            thumbnailPosition='right'
            slideInterval={5000}
          />
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
