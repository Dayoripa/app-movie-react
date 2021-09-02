import styles from "./../../scss/style/style.module.scss";
import { NavLinks } from "./NavLink";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className={styles.hamburger}
      size={40}
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={styles.hamburger}
      size={40}
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={styles.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};
