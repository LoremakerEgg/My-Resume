"use client";

import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
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
          coding works for ease of access to be used as an example of what I can
          do as a coder. Please check out one of the links in the header to
          learn more about me or to check out one of my projects.
        </p>
      </div>
    </main>
  );
}
