import styles from "./../scss/style/style.module.scss";
import { Navbar } from "./../components/navbar/Navbar";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className={styles.header}>
      <header className={styles.header__container}>
        <Search />
        <Navbar />
      </header>
    </header>
  );
};
