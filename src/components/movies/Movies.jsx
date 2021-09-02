import styles from "./../../scss/style/style.module.scss";
import { Header } from "../Header";
import { HeroMovies } from "./HeroMovies";
import { Fragment } from "react";
import { FormGender } from "./FormGender";
import { MoviesGrid } from "./MovieGrid";

export const Movies = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <HeroMovies />
        <section className={styles.movies__Cntr}>
          <div className={styles.containerBtn}>
            <h2 className={styles.title}>Movies</h2>
            <button className={styles.bntReset}>Reset Filters X</button>
          </div>
        </section>
        <section className={styles.section__card}>
          <FormGender />
          <MoviesGrid />
        </section>
      </main>
    </Fragment>
  );
};
