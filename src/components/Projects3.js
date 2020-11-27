import React from 'react';
import ImageGallery from 'react-image-gallery';

const imagesAvatars = [
  {
    original: 'https://live.staticflickr.com/65535/50654534531_85752db29d.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659458_c04c8548fe_b.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659458_b8692cc360_k.jpg',
    description: 'Render custom slides within the gallery',
  },
  {
    original: 'https://live.staticflickr.com/65535/50653775633_bc71889418.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659413_524332aecf_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659413_09def7c360_k.jpg',
  },
  {
    original: 'https://live.staticflickr.com/65535/50653816708_fa08109fd3.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653486897_7e580e35c3_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653486897_fd15acd4a4_k.jpg',
  },
  {
    original: 'https://live.staticflickr.com/65535/50654561961_14d65b0c94.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653396541_d238bae146_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653396541_981c15c2ee_k.jpg',
  },
];
const imagesPanels = [
  {
    original:
      'https://live.staticflickr.com/65535/50653396591_811b36523f_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653396591_811b36523f_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653396591_811b36523f_n.jpg',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50652659643_15b9487400_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659643_15b9487400_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659643_15b9487400_n.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653487022_24c4f404a4_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653487022_24c4f404a4_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653487022_24c4f404a4_n.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50652659663_8fcc4ccb7d_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659663_8fcc4ccb7d_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659663_8fcc4ccb7d_n.jpg',
  },
];

const imagesBadges = [
  {
    original:
      'https://live.staticflickr.com/65535/50652659293_73d0cabe9d_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659293_73d0cabe9d_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659293_73d0cabe9d_n.jpg',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50652659298_88ba61f406_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659298_88ba61f406_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659298_88ba61f406_n.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653396261_d826c41956_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653396261_d826c41956_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653396261_d826c41956_n.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653396266_88456f8892_w.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653396266_88456f8892_w.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653396266_88456f8892_w.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653486632_5e4bbecb93_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653486632_5e4bbecb93_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653486632_5e4bbecb93_n.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653396306_605e0f725a_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653396306_605e0f725a_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653396306_605e0f725a_n.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50652659328_2823527128_n.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652659328_2823527128_n.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652659328_2823527128_n.jpg',
  },
];
const imagesEmotes = [
  {
    original:
      'https://live.staticflickr.com/65535/50653487647_d70d56290f_w.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653487647_d70d56290f_w.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653487647_d70d56290f_w.jpg',
    description: 'Render custom slides within the gallery',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50652660348_347d4ef929_w.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50652660348_347d4ef929_w.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50652660348_347d4ef929_w.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653397391_97a91cf512_w.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653397391_97a91cf512_w.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653397391_97a91cf512_w.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653487657_0b55479112_w.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653487657_0b55479112_w.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653487657_0b55479112_w.jpg',
  },
  {
    original:
      'https://live.staticflickr.com/65535/50653487697_91d41977e0_w.jpg',
    thumbnail:
      'https://live.staticflickr.com/65535/50653487697_91d41977e0_w.jpg',
    fullscreen:
      'https://live.staticflickr.com/65535/50653487697_91d41977e0_w.jpg',
  },
];

const Projects3 = () => {
  return (
    <div className='gallery-container'>
      <div>
        <h1>Twitch Avatars</h1>
        <ImageGallery items={imagesAvatars} thumbnailPosition='right' />
      </div>

      <div>
        <h1>Twitch Panels</h1>
        <ImageGallery
          items={imagesPanels}
          thumbnailPosition='right'
          showFullscreenButton={false}
        />
      </div>

      <div>
        <h1>Twitch Badges</h1>
        <ImageGallery
          items={imagesBadges}
          thumbnailPosition='right'
          showFullscreenButton={false}
        />
      </div>

      <div>
        <h1>Twitch Emotes</h1>
        <ImageGallery
          items={imagesEmotes}
          thumbnailPosition='right'
          showFullscreenButton={false}
        />
      </div>

      <h1>Twitch Overlays</h1>
    </div>
  );
};

export default Projects3;
