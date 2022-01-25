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

  const onClickhandler = (movie) => {
    const isFevorite = favoriteMovies.find((item) => item.id === movie.id);
    if (isFevorite) {
      dispatch(removeFavoriteMovieAction(movie.id));
    } else {
      dispatch(addFavoriteMovieAction(movie));
    }
  };

  return (
    <div className={styles.films}>
      {movie.map((item) => (
        <div key={item.id} className={styles.movieBox}>
          <Link to={"/movie/" + item.id}>
            <div className={styles.movie}>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  />
                </div>
                <div className={styles.contex}>
                  <div>
                    <p className={styles.title}>{item.title}</p>
                    <div className={styles.release}>{item.release_date}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className={styles.svg}>
            <button
              onClick={() => onClickhandler(item)}
              className={styles.btn}
            >
              <svg
                className={styles.muiSvgIcon}
                focusable="false"
                fill="purple"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularsMovies;
