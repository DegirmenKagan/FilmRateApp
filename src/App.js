import React, { useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorText, setErrorText] = useState("");
  const searchMovies = async (title) => {
    setErrorText("");
    if (!title) {
      setErrorText("Please input a title.");
      return;
    }
    await fetch(`${process.env.REACT_APP_API_URL}&s=${title}`)
      .then(async (response) => {
        const data = await response.json();
        setMovies(data.Search);
      })
      .catch((error) => console.log(error));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>FilmRateApp</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="searchicon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {errorText ? <h3 className="errorText">{errorText}</h3> : <></>}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((item, index) => (
            <MovieCard item={item} key={"_" + index} />
          ))}
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
