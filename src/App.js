import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import Bookmarks from './components/Bookmarks';
import { useState, useEffect, useMemo, useCallback } from 'react';
import BookmarkContext from './context/bookmark-context';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getData = () => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const bookmarkedMoviesData = useMemo(
    () => movieData.filter((movie) => movie.isBookmarked),
    [movieData]
  );

  const setBookmarkData = useCallback(() => {
    setBookmarkedMovies(bookmarkedMoviesData);
  }, [bookmarkedMoviesData]);

  useEffect(() => {
    setBookmarkData();
  }, [setBookmarkData]);

  const trendingMoviesData = movieData.filter((movie) => movie.isTrending);
  const recommendedMoviesData = movieData.filter((movie) => !movie.isTrending);
  const filmMovieData = movieData.filter((movie) => movie.category === 'Movie');
  const tvSeriesData = movieData.filter(
    (movie) => movie.category === 'TV Series'
  );

  const toggleIsBookmarked = (movie) => {
    movie.isBookmarked = !movie.isBookmarked;

    if (movie.isBookmarked) {
      setBookmarkedMovies([...bookmarkedMovies, movie]);
    } else {
      setBookmarkedMovies(
        bookmarkedMovies.filter(
          (bookmarkedMovie) => bookmarkedMovie.title !== movie.title
        )
      );
    }

    return movie.isBookmarked;
  };
  /* 
  Prevent default on form
  create an input state and set it to an empty string
  add an event listener to the enter key 
 if input is filled, map through movie data.titles and check if any title includes e.target.value
 return the movies or return '
*/

  return (
    <div className='App'>
      <Sidebar />
      <BookmarkContext.Provider value={{ toggleIsBookmarked }}>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                movieData={movieData}
                trendingMoviesData={trendingMoviesData}
                recommendedMoviesData={recommendedMoviesData}
              />
            }
          />
          <Route
            path='/movies'
            element={<Movies filmMovieData={filmMovieData} />}
          />
          <Route
            path='tvshows'
            element={<TvShows tvSeriesData={tvSeriesData} />}
          />
          <Route
            path='bookmarks'
            element={<Bookmarks bookmarkedMovies={bookmarkedMovies} />}
          />
        </Routes>
      </BookmarkContext.Provider>
    </div>
  );
}

export default App;
