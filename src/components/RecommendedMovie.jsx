import { React, useContext } from 'react';
import BookmarkContext from '../context/bookmark-context';
import './RecommendedMovie.css';
import { ReactComponent as MovieIcon } from '../assets/icon-category-movie.svg';
import { ReactComponent as FullBookmarkIcon } from '../assets/icon-bookmark-full.svg';
import { ReactComponent as TvIcon } from '../assets/icon-category-tv.svg';
import { ReactComponent as BookmarkIcon } from '../assets/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from '../assets/icon-play.svg';


const RecommendedMovie = ({ movie }) => {
  const { toggleIsBookmarked } = useContext(BookmarkContext);

  return (
    <div
      className='movie-box'
      initial={{ opacity: 0, translateX:50}}
      animate={{ opacity: 1, translateX:0}}
      transition={{ duration: 1 }}
    >
      <div
        className='movie-image'
        style={{
          background: `url(${movie.thumbnail.regular.large}) no-repeat center center`,
        }}
      >
        <div className='overlay'></div>
        <div className='play-btn'>
          <PlayIcon /> Play
        </div>
        <div
          className=' recommended-bookmark bookmark'
          onClick={() => toggleIsBookmarked(movie)}
        >
          {movie.isBookmarked ? <FullBookmarkIcon /> : <BookmarkIcon />}
        </div>
      </div>

      <div className='movie-info'>
        <div>
          <p>{movie.year}</p>
          <p>
            <span>
              {movie.category === 'Movie' ? <MovieIcon /> : <TvIcon />}
            </span>
            {movie.category}
          </p>
          <p>{movie.rating}</p>
        </div>
        <h2 className='movie-name'>{movie.title}</h2>
      </div>
    </div>
  );
};

export default RecommendedMovie;
