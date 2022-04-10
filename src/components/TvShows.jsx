import SearchBar from './SearchBar';
import RecommendedMovie from './RecommendedMovie';
import SearchPage from './SearchPage';
import { useSearch } from '../hooks/search';

const TvShows = ({ tvSeriesData }) => {
  const { searchHandler, searchQuery, searchResult } = useSearch(tvSeriesData);

  return (
    <div className='tvShows-page-box' style={{ gridColumn: 2 / 3 }}>
      <SearchBar
        category={'TV series'}
        searchQuery={searchQuery}
        searchHandler={searchHandler}
      />

      {searchQuery && searchResult.length ? (
        <SearchPage searchResult={searchResult} searchQuery={searchQuery} />
      ) : (
        <>
          <h1 style={{ marginTop: '25px' }}>TV Series</h1>
          <div className='recommended-container'>
            {tvSeriesData.map((movie, i) => (
              <RecommendedMovie movie={movie} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TvShows;
