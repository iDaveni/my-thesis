import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./style.module.scss";
import {
  addFavoriteMovieAction,
  removeFavoriteMovieAction,
} from "../../../../redux/actions";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [recomend, setRecomend] = useState([]);
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((store) => store.favoriteMovies);
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=6e12ee409015717bcd9ab0435b9640cf`;
  const urlRecomendation = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=6e12ee409015717bcd9ab0435b9640cf`;

  const isLike = !!favoriteMovies.find((item) => item.id === movie?.id);

  useEffect(() => {
    axios.get(url).then((response) => {
      {
        setMovie(response.data);
      }
    });
  }, [setMovie, id]);

  useEffect(() => {
    axios.get(urlRecomendation).then((response) => {
      {
        setRecomend(response.data.results);
      }
    });
  }, [setRecomend, id]);

  if (movie === null) {
    return null;
  }

  return (
    <div className={styles.details}>
      <div className={styles.filmDetails}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        </div>
        <div key={movie.id} className={styles.filminfo}>
          <div className={styles.rateFilm}>
            <span className={styles.span}>{movie.vote_average}%</span>
            <div>
              <div className={styles.titleOriginal}>{movie.original_title}</div>
              <div className={styles.release}> {movie.release_date}</div>
              <div className={styles.votes}>
                User score based on{" "}
                <div className={styles.count}>{movie.vote_count}</div> votes
              </div>
            </div>
          </div>
          <div>
            <section>
              <span className={styles.overview}>Overview</span>
              <p className={styles.movieOver}>{movie.overview}</p>
            </section>
            <section>
              <div className={styles.genres}>Genres</div>
              <div className={styles.genresItem}>
                {movie.genres.map((item) => (
                  <div className={styles.itemGenger} key={item.id}>
                    <span className={styles.itemSpan}>{item.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className={styles.svg}>
          <button
            onClick={() =>
              isLike
                ? dispatch(removeFavoriteMovieAction(movie.id))
                : dispatch(addFavoriteMovieAction(movie))
            }
            className={styles.btn}
          >
            <svg
              className={isLike ? styles.likeFilm : styles.muiSvgIcon}
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
      <div className={styles.filmRecom}>
        <div className={styles.recommend}>
          <p>Recommendations</p>
        </div>
        <div className={styles.scrolblock}>
          {recomend.map((recomendMovie) => {
            const isLike = !!favoriteMovies.find(
              (item) => item.id === recomendMovie.id
            );
            return (
              <div key={recomendMovie.id} className={styles.movieItem}>
                <img
                  title={recomendMovie.title}
                  className={styles.image}
                  src={`https://image.tmdb.org/t/p/w500/${recomendMovie.backdrop_path}`}
                />
                <div className={styles.item}>
                  <p className={styles.titleimg}> {recomendMovie.title}</p>
                  <Link
                    to={"/movie/" + recomendMovie.id}
                    className={styles.link}
                  >
                    <button className={styles.btn}>
                      <svg
                        className={styles.muiSvgIcon}
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="white"
                        aria-hidden="true"
                      >
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                      </svg>
                    </button>
                  </Link>
                  <button
                    className={styles.btn}
                    onClick={() =>
                      isLike
                        ? dispatch(removeFavoriteMovieAction(recomendMovie.id))
                        : dispatch(addFavoriteMovieAction(recomendMovie))
                    }
                  >
                    <svg
                      className={isLike ? styles.likeFilm : styles.muiSvgIcon}
                      focusable="false"
                      fill="white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
