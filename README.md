# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). Frontend Mentor challenges help you improve your coding skills by building realistic project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages

### Screenshot

![](./screenshot.png)

### Links
- Live Site URL: [(https://dazzling-moonbeam-3025e2.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- React
- React-router dom for routing
- Custom react hooks

### What I learned

I needed a reuseable function that sets State in different components so I learned to use custom hooks.

```js
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

};
```

## Author
- Twitter - [@chessncode](https://www.twitter.com/chessncode)
