import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import {
  addFavoriteMovieAction,
  removeFavoriteMovieAction,
} from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const PopularsMovies = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((store) => store.favoriteMovies);
  const [movie, setMovie] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=6e12ee409015717bcd9ab0435b9640cf&page=1";

  useEffect(() => {
    axios.get(url).then((response) => {
      {
        setMovie(response.data.results);
      }
    });
  }, [setMovie]);

  return (
    <div className={styles.films}>
      {movie.map((popularMovie) => {
        const isLike = !!favoriteMovies.find(
          (item) => item.id === popularMovie.id
        );
        return (
          <div key={popularMovie.id} className={styles.movieBox}>
            <Link to={"/movie/" + popularMovie.id}>
              <div className={styles.movie}>
                <div className={styles.box}>
                  <div>
                    <img
                      className={styles.image}
                      src={`https://image.tmdb.org/t/p/w500/${popularMovie.poster_path}`}
                    />
                  </div>
                  <div className={styles.contex}>
                    <div>
                      <p className={styles.title}>{popularMovie.title}</p>
                      <div className={styles.release}>
                        {popularMovie.release_date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.svg}>
              <button
                className={styles.btn}
                onClick={() =>
                  isLike
                    ? dispatch(removeFavoriteMovieAction(popularMovie.id))
                    : dispatch(addFavoriteMovieAction(popularMovie))
                }
              >
                <svg
                  className={isLike ? styles.likeFilm : styles.muiSvgIcon}
                  focusable="false"
                  fill="black"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularsMovies;
