import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}&s=${title}`);
    const data = await response.json();
  };

  useEffect(() => {
    // searchMovies("baby driver");
  }, []);

  return (
    <div className="app">
      <h1>FilmRateApp</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={"baby driver"}
          onClick={() => {}}
        />
        <img src={SearchIcon} alt="searchicon" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((item) => {
            <MovieCard item={item} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
