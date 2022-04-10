import './TrendingMovies.css';
import SingleMovie from './SingleMovie';

const TrendingMovies = ({ trendingMoviesData }) => {
  return (
    <div className='trending-movies'>
      <h1>Trending</h1>
      <ul className='singlemovie-container'>
        {trendingMoviesData.map((movie, i) => (
          <SingleMovie movie={movie} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
