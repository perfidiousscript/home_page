import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLink}>
        <Link href="bio">Bio</Link>
      </div>
      <div className={styles.headerLink}>
        <Link href="bio">Credits</Link>
      </div>
      <div className={styles.headerLink}>
        <Link href="bio">Social</Link>
      </div>
    </div>
  );
}
