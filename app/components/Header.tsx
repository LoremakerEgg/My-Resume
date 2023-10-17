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
  };

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
            Anton Koller's Resume
          </Link>
          <Link
            href="/quasar"
            className={pathName == "/quasar" ? "myLinkActive" : "myLink"}
          >
            Quasar
          </Link>
        </div>
      </div>
      <div className={styles.title}>
        <Link href="/" className={pathName == "/" ? "myLinkActive" : "myLink"}>
          Anton Koller's Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
