"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathName = usePathname();
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const openSideMenu = () => {
    console.log(sideMenuVisible);
    setSideMenuVisible(!sideMenuVisible);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.sideMenu}
        style={{
          width: sideMenuVisible ? "250px !important" : "0px !important",
        }}
      >
        <a href="#">Test Link</a>
      </div>
      <div>
        <img
          src="menu-icon.png"
          alt="hamburger menu"
          className={styles.menu}
          onClick={openSideMenu}
        />
      </div>
      <div className={styles.title}>
        <Link href="/" className={pathName == "/" ? "myLinkActive" : "myLink"}>
          Anton Koller's Resume
        </Link>
        {/* <Link
          href="./resume"
          className={pathName == "/resume" ? "myLinkActive" : "myLink"}
        >
          Create Resume
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
