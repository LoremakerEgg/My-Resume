"use client";

import Image from "next/image";
import styles from "./page.module.scss";
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

export default function Home() {
  const size = useWindowSize();

  if (size.width > 1000) {
    return (
      <main className={styles.main}>
        <div className={styles.introDiv}>
          <Image
            src="/unsplash-andy-holmes.jpg"
            alt="a colorful view of space"
            fill
            className={styles.landingImage}
          />
          <h1 className={styles.titles}>
            <span className={styles.textColor}>ANTON KOLLER</span>'S COMPENDIUM
            WEBSITE
          </h1>
          <p className={styles.textContent}>
            Hello, and welcome to my website where I am compiling my various
            coding works for ease of access to be used as an example of what I
            can do as a coder. Please check out one of the links in the header
            to learn more about me or to check out one of my projects.
          </p>
        </div>
      </main>
    );
  } else if (size.width < 1000) {
    return (
      <main className={styles.main}>
        <h1 className={styles.titles}>
          MOBILE FUNCTIONALITY OF THIS PAGE IS CURRENTLY BEING IMPLEMENTED.
          PLEASE CHECK BACK SHORTLY.
        </h1>
      </main>
    );
  }
}
