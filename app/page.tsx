"use client";

import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageDiv}>
        <Image
          src="/unsplash-anna-hunko.jpg"
          alt="a cosy, circular library"
          fill
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className={styles.introDiv}>
        <h1 className={styles.titles}>
          <span className={styles.textColor}>ANTON KOLLER</span>'S COMPENDIUM
          WEBSITE
        </h1>
      </div>
      <div className={styles.arrowUp}></div>
      <figcaption
        style={{
          marginTop: "110px",
          color: "grey",
          marginLeft: "40%",
          zIndex: "1",
        }}
      >
        Photo by Anna Hunko on Unsplash
      </figcaption>
      <div className={styles.majorTextDiv}>
        <div className={styles.minorTextDiv}>
          <h2 className={styles.minorTitles}>Purpose</h2>
          <p className={styles.textContent}>
            The purpose of this website is to serve as a compendium of my
            various coding works, as well as a resume for me and my abilities.
            There are many different pages to explore and the site is
            continously growing as I strive to grow as a programmer, both on the
            front-end and back-end of all things coding, in the effort to become
            a fullstack programmer.
          </p>
          <img src="/icons8-bookmark-240.png" style={{ width: "120px" }}></img>
        </div>
        <div className={styles.minorTextDiv}>
          <h2 className={styles.minorTitles}>Variety</h2>
          <p className={styles.textContent}>
            I intend to try as many different types of concepts within this
            website, from expanding my skills within pure HTML and CSS/SCSS
            styling, to pure logic knowledge. An example of this can be found on
            my{" "}
            <a href="/quasar" style={{ textDecoration: "none", color: "blue" }}>
              Quasar
            </a>{" "}
            page, where I not only explore game logic but also utilize various
            means of storage to track your score.
          </p>
          <img src="/icons8-mailbox-240.png" style={{ width: "120px" }}></img>
        </div>
        <div className={styles.minorTextDiv}>
          <h2 className={styles.minorTitles}>Feedback</h2>
          <p className={styles.textContent}>
            If you have any feedback on any of the features on this website,
            from my coding work (which you can look at on my{" "}
            <a
              href="https://github.com/LoremakerEgg"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "blue" }}
            >
              GitHub
            </a>
            ) to the styling or features that don't make a lot of sense, don't
            hesitate to contact me. I can be reached via LinkedIn or my email,
            both of which are found in the footer of the website (as can the
            GitHub link)!
          </p>
          <img src="/icons8-connect-240.png" style={{ width: "120px" }}></img>
        </div>
      </div>
    </main>
  );
}
