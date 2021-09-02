import styles from "./../../scss/style/style.module.scss";
import { Fragment } from "react";

export const HeroMovies = () => {
  return (
    <Fragment>
      <section className={styles.section__ctnr}>
        <div className={styles.section__image}>
          <h1 className={styles.title}>HERO</h1>
        </div>
      </section>
    </Fragment>
  );
};
