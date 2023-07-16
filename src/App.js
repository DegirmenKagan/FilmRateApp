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

      <div className="container">
        <div className="movie">
          <div>
            <p>{item.Year}</p>
          </div>
          <div>
            {" "}
            <img
              src={item.Poster ?? "https://via.placeholder.com/400"}
              alt={item.Title}
            />
          </div>
          <div>
            <span>{item.Type}</span>
            <h3>{item.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
