import AppNav from "./AppNav";
import Logo from "./Logo";

import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}></footer>
      <p className={styles.copygight}>
        &copy; Copyright {new Date().getFullYear()} by WorldWide Inc.
      </p>
    </div>
  );
};

export default SideBar;
