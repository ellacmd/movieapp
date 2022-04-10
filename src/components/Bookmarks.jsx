import SearchBar from './SearchBar';
import RecommendedMovie from './RecommendedMovie';
import SearchPage from './SearchPage';
import { useSearch } from '../hooks/search';

const Bookmarks = ({ bookmarkedMovies }) => {
  const { searchHandler, searchQuery, searchResult } =
    useSearch(bookmarkedMovies);
  return (
    <div className='bookmark-box'>
      <SearchBar
        category={'bookmarked movies'}
        searchHandler={searchHandler}
        searchQuery={searchQuery}
      />
      {searchQuery && searchResult.length ? (
        <SearchPage searchResult={searchResult} searchQuery={searchQuery} />
      ) : (
        <>
          <h1 className='top'>Bookmarked Movies</h1>
          <ul className='recommended-container bookmarked'>
            {bookmarkedMovies.map(
              (movie, i) =>
                movie.category === 'Movie' && (
                  <RecommendedMovie movie={movie} key={i} />
                )
            )}
          </ul>
          <h1> Bookmarked TV series</h1>
          <ul className='recommended-container bookmarked'>
            {bookmarkedMovies.map(
              (movie, i) =>
                movie.category === 'TV Series' && (
                  <RecommendedMovie movie={movie} key={i} />
                )
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Bookmarks;
