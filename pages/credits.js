import Head from "next/head";
import styles from "../styles/Credits.module.css";
import Link from "next/link";
import Header from "../components/header.js";

export default function Credits() {
  return (
    <>
      <Header />
      <div className={styles.credits}>
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            [Forthcoming] 'Morello, Van, Marasca' in 3:AM Magazine June 2021
          </div>
          <div className={styles.quote}>
            “One thing I’ve learned,” she’d said one morning, unbidden, “Is that
            if you talk enough about something you don’t have, it will
            eventually find you.” I had to wonder if that was why she never
            talked of stuff.
          </div>
        </div>
      </div>
    </>
  );
}
