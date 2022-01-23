import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../Input";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <button className={styles.btn}>
          <NavLink className={styles.item} to="/" title="Popolar">
            <svg
              className={styles.muiSvgIcon}
              focusable="false"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
            </svg>
            <div>POPULAR</div>
          </NavLink>
        </button>
        <button className={styles.btn}>
          <NavLink className={styles.item} to="/Favorites" title="Favorites">
            <svg
              className={styles.muiSvgIcon}
              focusable="false"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
            </svg>
            <div>Favorites</div>
          </NavLink>
        </button>
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Header;
