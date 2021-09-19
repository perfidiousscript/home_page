import Head from "next/head";
import styles from "../styles/Credits.module.css";
import Link from "next/link";
import Header from "../components/Header.js";
import { credits } from "../public/credits.js";

export default function Credits() {
  function creditEntries() {
    let creditsHTML = credits.map((credit) => {
      if (credit.year) {
        return <div className={styles.creditYear}>{credit.year}</div>;
      } else {
        return (
          <div className={styles.creditEntry} key={credit.title}>
            <div className={styles.title}>{credit.title}</div>
            <div className={styles.quote}>{credit.quote}</div>
          </div>
        );
      }
    });

    return creditsHTML;
  }
  return (
    <>
      <Header />
      <div className="pageTitle">Recent and Selected Credits</div>
      <div className={styles.credits}>
        {creditEntries()}
        <div className={styles.title}>
          Older credits can be found{" "}
          <a href="https://perfidiousscript.blogspot.com/p/complete-list-of-credits.html">
            here
          </a>
          .
        </div>
      </div>
    </>
  );
}
