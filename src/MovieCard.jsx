import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div className="movie">
      <div>
        <p>{item.Year}</p>
      </div>
      <div>
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
  );
};

export default MovieCard;
