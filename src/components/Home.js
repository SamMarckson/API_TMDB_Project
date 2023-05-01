import { useState, useEffect } from "react";
import MovieCard from "../pages/MovieCard";

import "./MoviesGrid.css";

const apiUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=f78227963d510bbcf278e7f3384d9219";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTopRatedMovies = async (url) => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    setTopMovies(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    const topRatedUrl = `${apiUrl}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      {/* <Navbar /> */}
      <h2 className="title">
        <span>20</span> BEST MOVIES
      </h2>
      <div className="movies-container">
        {isLoading && <p>IT'S LOADING, FRIEND!</p>}
        {!isLoading &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
