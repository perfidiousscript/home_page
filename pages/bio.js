import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Bio.module.css";
import Link from "next/link";
import Header from "../components/Header.js";

export default function Bio() {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.bio}>
        <div className={styles.bioImage}>
          <Image src="/bio_img.jpg" width="300" height="300" />
        </div>
        <div className={styles.bioBody}>
          Samuel M. Mossis a writer and editor who lives in rural Cascadia. His fiction and poetry have been published in <i>3:AM Magazine</i>, <i>minor literature[s]</i>, <i>New World Writing</i>,{" "}
          <i>Word For/ Word</i>, <i>Dim Shores Presents</i>, and <i>Vastarien</i>{" "}
          <Link href="credits">among other venues</Link>. He runs <a href="https://www.ergot.press/">ergot.</a>, a site for innovative and experimental horror and is an associate
          editor and web lead at{" "}
          <a href="https://1111press.com/">11:11 Press</a>.
        </div>
      </div>
    </div>
  );
}
