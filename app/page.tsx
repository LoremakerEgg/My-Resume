import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.textDiv}>
        <h2>This is my resume</h2>
      </div>
      <div className={styles.imageDiv}>
        <Image src="" alt="placeholder text for placeholder image" />
      </div>
    </main>
  );
}
