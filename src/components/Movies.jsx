import SearchBar from './SearchBar';
import RecommendedMovie from './RecommendedMovie';
import { useSearch } from '../hooks/search';
import SearchPage from './SearchPage';

const Movies = ({ filmMovieData }) => {
  const { searchHandler, searchQuery, searchResult } = useSearch(filmMovieData);

  return (
    <div className='movie-page-box' style={{ gridColumn: 2 / 3 }}>
      <SearchBar
        category={'movies'}
        searchQuery={searchQuery}
        searchHandler={searchHandler}
      />
      {searchQuery && searchResult.length ? (
        <SearchPage searchResult={searchResult} searchQuery={searchQuery} />
      ) : (
        <>
          <h1 className='top'>Movies</h1>
          <div className='recommended-container'>
            {filmMovieData.map((movie, i) => (
              <RecommendedMovie movie={movie} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movies;
