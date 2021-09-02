import styles from "./../../scss/style/style.module.scss";
import { Fragment } from "react";
import { GoSearch } from "react-icons/go";
export const FormGender = () => {
  return (
    <Fragment>
      <section className={styles.Gender__cntr}>
        <h3 className={styles.gender__title}>Filter By</h3>
        <form className={styles.form__gender}>
          <h2 className={styles.gender__text}>Genre</h2>
          <div className={styles.form__group}>
            <button className={styles.form__button}>
              <GoSearch size={18} />
            </button>
            <input
              type="text"
              className={styles.form__input}
              placeholder="Start typing to search"
            />
          </div>
          <div className={styles.genders}>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="action"
              />
              Action
            </label>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="adventure"
              />
              Adventure
            </label>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="animation"
              />
              Animation
            </label>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="comedy"
              />
              Comedy
            </label>
            <label>
              <input className={styles.checkbox} type="checkbox" name="crime" />
              Crime
            </label>
            <label>
              <input className={styles.checkbox} type="checkbox" name="drama" />
              Drama
            </label>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="fantasy"
              />
              Fantasy
            </label>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="history"
              />
              Historical
            </label>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="romantic"
              />
              Romantic
            </label>
            <a className={styles.form__see} href="#/see">
              See all
            </a>
          </div>
        </form>
      </section>
    </Fragment>
  );
};
