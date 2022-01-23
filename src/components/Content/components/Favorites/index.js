import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoriteMovies = useSelector((store) => store.favoriteMovies);

  return (
    <div>
      {favoriteMovies.map((item) => (
        <img
          title={item.title}
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        />
      ))}
    </div>
  );
};

export default Favorites;
