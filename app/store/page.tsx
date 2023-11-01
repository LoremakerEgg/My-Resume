"use client";

import styles from "./page.module.scss";

export default function Store() {
  return (
    <main>
      <div className={styles.contentDiv}>
        <h2 className={styles.text}>
          Page is currently being constructed! Come back later!
        </h2>
        <img
          src="store-wip.jpg"
          alt="a black cat with its tongue out, squatting on a wooden floor"
          width={300}
        />
      </div>
    </main>
  );
}
