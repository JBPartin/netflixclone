import '../styles/Movies.css';
import Genre from './Genre';
import Trending from './Trending';
import React, { useState, useEffect } from 'react';
function Movies(props) {
  const [movies, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    let movies = [];
    (async () => {
      for (let i = 1; i < 40; i++)
        await props.db.moviePopular({ page: i }).then(res => {
          movies.push(...res.results);
        }).catch();
    })().then(() => {
      setMovie(movies);
    });
    props.db.genreMovieList().then(res => {
      setGenres(res.genres);
    }).catch();
  }, [props.db]);
  return (
    <div className="App">
      <Trending movies={movies} />
      {Array.from(genres).map(genre => {
        return <Genre movies={movies} genre={genre.id} genreName={genre.name} />
      })}
    </div>
  );
}

export default Movies;
