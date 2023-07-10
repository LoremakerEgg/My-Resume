import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.textDiv}>
        <h2>Here are some example resumes</h2>
      </div>
      <div className={styles.imageDiv}>
        <Image src="" alt="placeholder text for resume display" />
      </div>
    </main>
  );
}
