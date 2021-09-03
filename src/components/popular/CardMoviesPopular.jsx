import styles from "./../../scss/style/style.module.scss";

export const CardMoviesPopular = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <a href={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
      </a>
    </li>
  );
};

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
