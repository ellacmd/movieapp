import { useState } from 'react';

export const useSearch = (movieData) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = (e) => {
    const typedInput = e.target.value;
    // updates the input
    setSearchQuery(typedInput);
    // do the logic
    const query = typedInput.trim().toLowerCase();

    const searchResults = movieData?.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setSearchResult(searchResults);
  };

  return { searchResult, searchQuery, searchHandler };
};
