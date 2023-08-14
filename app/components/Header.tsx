"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <div>
        <img src="menu-icon.png" alt="hamburger menu" className={styles.menu} />
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
