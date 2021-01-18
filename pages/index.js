import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/header.js";

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
            Samuel M. Moss is from Cascadia. His work has been published in{" "}
            <i>3:AM Magazine</i>, <i>Young Mag</i>, <i>Word For/Word</i> and{" "}
            <i>Vastarien</i> among other venues. He is an associate editor and
            web lead at 11:11 Press.
          </div>
        </div>
      </div>
      <div className={styles.landing}>
        <div className={styles.landingTop}>
          <Image src="/ergot.jpg" width="800" height="400" />
        </div>
        <div className={styles.landingBottom}></div>
      </div>
    </>
  );
}
