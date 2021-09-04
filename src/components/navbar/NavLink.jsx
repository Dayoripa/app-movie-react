import styles from "./../../scss/style/style.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className={styles.navbar__flex}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={styles.navbar__list}
      >
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={styles.navbar__list}
      >
        <Link to="/popular" className={styles.link}>
          Popular{" "}
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={styles.navbar__list}
      >
        <Link to="/topRated" className={styles.link}>
          Top Rated
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className={styles.navbar__list}
      >
        <Link to="/upcoming" className={styles.link}>
          Upcoming
        </Link>
      </motion.li>
    </ul>
  );
};
