"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Header = () => {
  const size = useWindowSize();
  if (size.width > 1000) {
    return (
      <header className={styles.header}>
        <img
          src="favicon.ico"
          alt="green logo of my initials, AK"
          className={styles.logo}
        />
        <div className={styles.title}>
          <Link href="/" className={styles.links}>
            Home
          </Link>
          <Link href="/resume" className={styles.links}>
            About
          </Link>
          <Link href="/quasar" className={styles.links}>
            Quasar
          </Link>
        </div>
      </header>
    );
  } else if (size.width < 600) {
    return (
      <header className={styles.header}>
        <img
          src="favicon.ico"
          alt="green logo of my initials, AK"
          className={styles.logo}
        />
        <div className={styles.dropdownNav}>
          <button className={styles.dropdownButton}>Menu</button>
          <div className={styles.dropdownContent}>
            <Link href="/" className={styles.links}>
              Home
            </Link>
            <Link href="/resume" className={styles.links}>
              About
            </Link>
            <Link href="/quasar" className={styles.links}>
              Quasar
            </Link>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
