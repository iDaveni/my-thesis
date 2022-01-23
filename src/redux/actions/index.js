const addFavoriteMovieAction = (movie) => {
  return {
    type: "ADD_FAVORITE_MOVIE",
    payload: movie,
  };
};

const removeFavoriteMovieAction = (id) => {
  return {
    type: "REMOVE_FAVORITE_MOVIE",
    payload: id,
  };
};

export { addFavoriteMovieAction, removeFavoriteMovieAction };
