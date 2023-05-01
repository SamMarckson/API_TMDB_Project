import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../pages/MovieCard";

import "./MoviesGrid.css";

const searchUrl = "https://api.themoviedb.org/3/search/movie";
const apiKey = "api_key=f78227963d510bbcf278e7f3384d9219";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  // const getSearchedMovies = useCallback( async (url) => {
  //     // setIsLoading(true);
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //     // console.log(data.results);
  //     setMovies(data.results);
  //     // setIsLoading(false);
  //   }, []);

  //   useEffect(() => {
  //     const searchedUrl = `${searchUrl}?${apiKey}&query=${query}`;
  //     getSearchedMovies(searchedUrl);
  //   }, [query, getSearchedMovies]);

  useEffect(() => {
    const searchedUrl = `${searchUrl}?${apiKey}&query=${query}`;
    fetch(searchedUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultado para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className="diff">
        {movies.length === 0 && <h1>NO MOVIE FOUND!</h1>}
      </div>
    </div>
  );
};

export default Search;
