import { useState } from 'react';
import data from '../MovieData.json';

const MovieDataSource = data.MovieData;

function MovieList() {
  const [ListOfMovies, setListOfMovies] = useState(MovieDataSource);

  return (
    <>
      <div>
        <h3>Joel Hilton's Podcast</h3>
        <p>Check out my awesome Podcast "baconscale" below!</p>
        <a href="https://baconsale.com/">Click Here</a>
      </div>
    </>
  );
}

export default MovieList;
