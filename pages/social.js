import Head from "next/head";
import styles from "../styles/Social.module.css";
import Link from "next/link";
import Header from "../components/Header.js";

export default function Bio() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.entry}>
          <a href="https://bsky.app/profile/perfidiousscript.bsky.social">
            Bluesky
          </a>
        </div>
        <div className={styles.entry}>
          <a href="https://www.goodreads.com/author/show/13994421.Samuel_M_Moss">
            Goodreads
          </a>
        </div>
        <div className={styles.entry}>
          <a href="https://letterboxd.com/sammmoss/">Lettrboxd</a>
        </div>
        <div className={styles.entry}>
          <a href="https://github.com/perfidiousscript">Github</a>
        </div>
      </div>
    </>
  );
}
