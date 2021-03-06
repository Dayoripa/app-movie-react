import styles from "./../../scss/style/style.module.scss";
import { Spinner } from "./../../components/movies/Spinner";
import { useQuery } from "./../../hooks/UseQuery";
import { Fragment, useEffect, useState } from "react";
import { get } from "./../../utility/HttpClient";
import { CardMoviesPopular } from "./CardMoviesPopular";

export const GridMoviesPopular = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  //console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?=" + search : "/movie/popular";
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
    <Fragment>
      <ul className={styles.grid__movies}>
        {movies.map((movie) => (
          <CardMoviesPopular key={movie.id} movie={movie} />
        ))}
      </ul>
    </Fragment>
  );
};
