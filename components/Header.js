import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nameContainer}>SAMUEL M. MOSS</div>
      <div className={styles.headerLinkContainer}>
        <div className={styles.headerLink}>
          <Link href="bio">Bio</Link>
        </div>
        <div className={styles.headerLink}>
          <Link href="credits">Credits</Link>
        </div>
        {/* <div className={styles.headerLink}>
          <Link href="reviews">Reviews</Link>
        </div>
        <div className={styles.headerLink}>
          <Link href="web_portfolio">Web Portfolio</Link>
          </div> */}
        <div className={styles.headerLink}>
          <Link href="editorial_services">Editorial Services</Link>
        </div>
        <div className={styles.headerLink}>
          <Link href="social">Social</Link>
        </div>
      </div>
    </div>
  );
}
