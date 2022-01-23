import React from "react";
import styles from "./style.module.scss";
import { Routes, Route } from "react-router-dom";
import PopularsMovies from "./components/PopularsMovies";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";

const Content = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<PopularsMovies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default Content;
