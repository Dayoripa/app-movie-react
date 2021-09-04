import styles from "./../../scss/style/style.module.scss";
import { Spinner } from "./../../components/movies/Spinner";
import { useQuery } from "./../../hooks/UseQuery";
import { useEffect, useState } from "react";
import { get } from "./../../utility/HttpClient";
import { CardMoviesTopRated } from "./CardMoviesTopRated";

export const GridTopRated = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  //console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?=" + search : "/movie/top_rated";
    get(searchUrl).then((data) => {
      console.log(data);
      console.log(searchUrl);
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
        <CardMoviesTopRated key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
