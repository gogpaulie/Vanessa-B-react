import React from 'react';

const NavbarMobileDrawer = ({ open, handleOpen }) => {
  return (
    <div id='nav-mobile' className={open ? 'drawer open' : 'drawer'}>
      <ul className='drawer__list'>
        <li className='drawer__list--link'>
          <a href='#home' className='current' onClick={handleOpen}>
            Home
          </a>
        </li>

        <li className='drawer__list--link'>
          <a href='#projects' onClick={handleOpen}>
            Freelance
          </a>
        </li>
        <li className='drawer__list--link'>
          <a href='#about' className='current' onClick={handleOpen}>
            About
          </a>
        </li>

        <li className='drawer__list--link'>
          <a href='#contact' onClick={handleOpen}>
            Contact
          </a>
        </li>
      </ul>
      <div className='drawer__social-media'>
        <a
          href='https://www.youtube.com/channel/UCN5bM7K9waHqpaeNvwD7AyA'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-youtube'></i>
        </a>
        <a
          href='https://www.twitch.tv/pleasantlytwstd'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-twitch'></i>
        </a>
        <a
          href='https://twitter.com/pleasantlytwstd'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobileDrawer;
