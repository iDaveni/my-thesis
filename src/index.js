import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const favoriteMoviesReducer = (state = [], action) => {
  if (action.type === "ADD_FAVORITE_MOVIE") {
    return [...state, action.payload];
  }
  if (action.type === "REMOVE_FAVORITE_MOVIE") {
    return state.filter((movie) => movie.id !== action.payload);
  }
  return state;
};

const redusers = combineReducers({
  favoriteMovies: favoriteMoviesReducer,
});

const store = createStore(redusers, composeWithDevTools());


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
