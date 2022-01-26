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
          <NavLink className={styles.item} to="/favorites" title="Favorites">
            <svg
              className={styles.muiSvgIcon}
              focusable="false"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
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
