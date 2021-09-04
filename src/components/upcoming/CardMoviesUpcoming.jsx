import styles from "./../../scss/style/style.module.scss";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CardMoviesUpcoming = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const [hide, setHide] = useState(false);

  const setStyle = (e) => {
    setHide();
  };

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id} className={styles.card__link}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.card__footer} onMouseEnter={setStyle}>
          <p>{movie.title}</p>
          <p className={styles.card__date}>
            {movie.original_language} <GoCalendar size={7} />
            <span>{movie.release_date}</span>
          </p>
        </div>
      </Link>
    </li>
  );
};
