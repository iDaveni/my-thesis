import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Slider from "react-slick";
import styles from "./style.module.scss";
import {
  addFavoriteMovieAction,
  removeFavoriteMovieAction,
} from "../../../../redux/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [recomend, setRecomend] = useState([]);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,  
    centerMode: true,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
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
              fill="black"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.filmRecom}>
        <div className={styles.recommend}>
          <p>Recommendations</p>
        </div>
        <Slider {...settings}>
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
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default MovieDetails;
