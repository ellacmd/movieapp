import { useContext } from 'react';
import BookmarkContext from '../context/bookmark-context';
import './SingleMovie.css';
import { ReactComponent as BookmarkIcon } from '../assets/icon-bookmark-empty.svg';
import { ReactComponent as FullBookmarkIcon } from '../assets/icon-bookmark-full.svg';
import { ReactComponent as MovieIcon } from '../assets/icon-category-movie.svg';
import { ReactComponent as TvIcon } from '../assets/icon-category-tv.svg';
import { ReactComponent as PlayIcon } from '../assets/icon-play.svg';
import { motion } from 'framer-motion';

const SingleMovie = ({ movie }) => {
  const { toggleIsBookmarked } = useContext(BookmarkContext);
  return (
    <motion.div
   
      className='single-movie'
      style={{ backgroundImage: `url(${movie.thumbnail.trending.large} ) ` }}
      
    >
      <div className="overlay"></div>
       <div className="play-btn">
          <PlayIcon/> Play
        </div>
        
      <div className='bookmark' onClick={() => toggleIsBookmarked(movie)}>
        {movie.isBookmarked ? <FullBookmarkIcon /> : <BookmarkIcon />}
      </div>
      <div className='movie-data'>
        <div className='movie-data-sub'>
          {' '}
          <p className='year'>{movie.year}</p>
          <p className='category'>
            <span>
              {movie.category === 'Movie' ? <MovieIcon /> : <TvIcon />}
            </span>

            {movie.category}
          </p>
          <p className='rating'>{movie.rating}</p>
        </div>
        <h2 className='movie-name'>{movie.title}</h2>
      </div>
    </motion.div>
  );
};

export default SingleMovie;
