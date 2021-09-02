import styles from "./../scss/style/style.module.scss";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/UseQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  // hacer cambio de ruta
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // añade un valor a la ruta cuando se busca el valor escrito en el input
    history.push("/?search=" + searchText);
  };
  return (
    <form className={styles.search__container} onSubmit={handleSubmit}>
      <div className={styles.search__box}>
        <input
          className={styles.search__input}
          type="text"
          placeholder="Search to movie"
          value={searchText}
          // cambia el estado del searchText y automáticamente asigna el nuevo valor del value
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.search__button} type="submit">
          <FaSearch className={styles.btn__search} size={13} />
        </button>
      </div>
    </form>
  );
}
