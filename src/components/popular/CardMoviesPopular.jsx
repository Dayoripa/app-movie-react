import { Link } from "react-router-dom";
import styles from "./../../scss/style/style.module.scss";
import { GoCalendar } from "react-icons/go";

export const CardMoviesPopular = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link Link to={"/movies/" + movie.id} className={styles.card__link}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.card__footer}>
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

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
