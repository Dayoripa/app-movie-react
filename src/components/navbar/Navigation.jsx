import styles from "./../../scss/style/style.module.scss";
import { NavLinks } from "./NavLink";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
    </nav>
  );
};
