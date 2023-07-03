"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/" className={pathName == "/" ? "myLinkActive" : "myLink"}>
          Test link
        </Link>
      </div>
    </header>
  );
};

export default Header;
