import styles from "./../../scss/style/style.module.scss";
import { Header } from "../Header";
import { Fragment } from "react";
import { GridTopRated } from "./GrigTopRated";
import { FormGender } from "../movies/FormGender";

export const TopRated = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section className={styles.movies__Cntr}>
          <div className={styles.containerBtn}>
            <h2 className={styles.title}>Movies</h2>
            <button className={styles.bntReset}>Reset Filters X</button>
          </div>
        </section>
        <section className={styles.section__card}>
          <FormGender />
          <GridTopRated />
        </section>
      </main>
    </Fragment>
  );
};
