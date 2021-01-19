import Head from "next/head";
import styles from "../styles/Social.module.css";
import Link from "next/link";
import Header from "../components/header.js";

export default function Bio() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.entry}>
          <a href="https://twitter.com/perfidiouscript">Twitter</a>
        </div>
        <div className={styles.entry}>
          <a href="https://www.goodreads.com/author/show/13994421.Samuel_M_Moss">
            Goodreads
          </a>
        </div>
        <div className={styles.entry}>
          <a href="https://www.quora.com/profile/Sam-Moss-8">Quora</a>
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
