import React from 'react';
import './Sidebar.css';
import movieLogo from '../assets/logo.svg';
import avatar from '../assets/image-avatar.png';
import { ReactComponent as HomeIcon } from '../assets/icon-nav-home.svg';

import { ReactComponent as MoviesIcon } from '../assets/icon-nav-movies.svg';
import { ReactComponent as TvIcon } from '../assets/icon-nav-tv-series.svg';
import { ReactComponent as BookmarkIcon } from '../assets/icon-nav-bookmark.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
        <img className='movie-logo' src={movieLogo} alt='' />
        <div className='icon-container'>
          <NavLink to='/'>
            <HomeIcon />
          </NavLink>
          <NavLink to='movies'>
            <MoviesIcon />
          </NavLink>
          <NavLink to='tvshows'>
            <TvIcon />
          </NavLink>
          <NavLink to='bookmarks'>
            <BookmarkIcon />
          </NavLink>
        </div>
        <img className='avatar' src={avatar} alt='' />
      </div>
    </div>
  );
};

export default Sidebar;
