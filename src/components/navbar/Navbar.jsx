import styles from "./../../scss/style/style.module.scss";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

export const Navbar = () => {
  return (
    <div className={styles.navbar__container}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
