import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';

const SearchBar = ({ category, searchQuery, searchHandler }) => {
  const placeholderString = `Search for ${category} `;

  return (
    <div className='search-form'>
      <SearchIcon />
      <input
        value={searchQuery}
        placeholder={placeholderString}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
