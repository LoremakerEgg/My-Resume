"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathName = usePathname();
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuVisible(!sideMenuVisible);
    console.log(document);
  };

  // const goHome = () => {
  //   //implement functionality
  // };

  return (
    <header className={styles.header}>
      <div>
        <img
          src="menu-icon.png"
          alt="hamburger menu"
          className={styles.menu}
          onClick={toggleSideMenu}
        />
        <div
          className={
            sideMenuVisible == true
              ? styles.menuContentVisible
              : styles.menuContentInvisible
          }
          onClick={toggleSideMenu}
        >
          <Link
            href="/"
            className={pathName == "/" ? "myLinkActive" : "myLink"}
          >
            Home
          </Link>
          <Link
            href="/resume"
            className={pathName == "/resume" ? "myLinkActive" : "myLink"}
          >
            My Resume
          </Link>
          <Link
            href="/quasar"
            className={pathName == "/quasar" ? "myLinkActive" : "myLink"}
          >
            Quasar
          </Link>
        </div>
      </div>
      <div>
        <Link href="/">
          <img src="home-icon.png" alt="house" className={styles.home} />
        </Link>
      </div>
      <div className={styles.title}>
        <h3>{pathName == "/" ? "Home" : "My Projects"}</h3>
      </div>
    </header>
  );
};

export default Header;
