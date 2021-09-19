import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <Header />
        <div className={styles.bio}>
          <Image
            className={styles.bioImage}
            src="/bio_img.jpg"
            width="300"
            height="300"
          />
          <div className={styles.bioBody}>
            Samuel M. Moss is from Cascadia. He has work published, or
            forthcoming, in <i>3:AM Magazine</i>, <i>Young Mag</i>,{" "}
            <i>Word For/ Word</i> and <i>Vastarien</i>{" "}
            <Link href="credits">among other venues</Link>. He is an associate
            editor and web lead at{" "}
            <a href="https://1111press.com/">11:11 Press</a>.
          </div>
        </div>
      </div>
      <div className={styles.landing}>
        <div className={styles.landingTop}></div>
        <div className={styles.landingBottom}></div>
      </div>
    </>
  );
}
