import styles from "./../../scss/style/style.module.scss";
import { Spinner } from "./Spinner";
import { useQuery } from "./../../hooks/UseQuery";
import { useEffect, useState } from "react";
import { get } from "./../../utility/HttpClient";
import { CardMovies } from "./CardMovies";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ul className={styles.grid__movies}>
      {movies.map((movie) => (
        <CardMovies key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
