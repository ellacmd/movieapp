import RecommendedMovie from './RecommendedMovie';

const SearchPage = ({ searchResult, searchQuery }) => {
  return (
    <div className='recommended search'>
      <h1 className='top'>
        Found {searchResult.length} results for {searchQuery}
      </h1>

      <ul className='recommended-container'>
        {searchResult.map((movie, i) => (
          <RecommendedMovie movie={movie} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
