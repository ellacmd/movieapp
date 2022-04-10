import SearchBar from './SearchBar';
import TrendingMovies from './TrendingMovies';
import RecommendedSection from './RecommendedSection';

import SearchPage from './SearchPage';
import { useSearch } from '../hooks/search';

const Home = ({ trendingMoviesData, recommendedMoviesData, movieData }) => {
  const { searchHandler, searchQuery, searchResult } = useSearch(movieData);

  return (
    <>
      <SearchBar
        category={'movies or TV series'}
        searchQuery={searchQuery}
        searchHandler={searchHandler}
      />
      {searchQuery && searchResult.length ? (
        <SearchPage searchResult={searchResult} searchQuery={searchQuery} />
      ) : (
        <>
          <TrendingMovies trendingMoviesData={trendingMoviesData} />
          <RecommendedSection recommendedMoviesData={recommendedMoviesData} />
        </>
      )}
    </>
  );
};

export default Home;
