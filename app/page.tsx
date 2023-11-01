"use client";

import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentDiv}>
        <h3 className={styles.textContent}>
          Hello! Welcome to my resume! If you are a prospective employer and
          would like to learn more about me, please press this button to go to
          my resume page, where you can read about my experiences and me as a
          person!
        </h3>
        <Link href="/resume">
          <button className={styles.button}>Resume</button>
        </Link>
      </div>
      <div className={styles.contentDiv}>
        <h3 className={styles.textContent}>
          If you would like to see more about my skills in action or my personal
          projects, please press one of the buttons below to explore! (MORE
          BUTTONS COMING)
        </h3>
        <Link href="/quasar">
          <button className={styles.button}>Quasar</button>
        </Link>
        <Link href="/store">
          <button className={styles.button} style={{ marginTop: "10px" }}>
            Store
          </button>
        </Link>
        {/* <Link href="#">
          <button className={styles.button}>NYI</button>
        </Link>
        <Link href="#">
          <button className={styles.button}>NYI</button>
        </Link> */}
      </div>
    </main>
  );
}
