import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Bio.module.css";
import Link from "next/link";
import Header from "../components/Header.js";
import { Helmet } from "react-helmet";

export default function Bio() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"Person","name":"Samuel M. Moss","maintainer":"ergot. press"}`}
        </script>
      </Helmet>
      <div className={styles.content}>
        <Header />
        <div className={styles.bio}>
          <div class="bioImage">
            <Image src="/images/2025_photo.jpg" fill={true} />
          </div>
          <div class="authorPhotoCredit">
            Author photo by{" "}
            <Link href="https://www.instagram.com/doomstache">
              Jon R. Moore
            </Link>
          </div>
          <div className={styles.bioBody}>
            Samuel M. Moss is a writer and editor who lives in rural Cascadia.
            He is the author of <i>The Veldt Institute</i> (Double--Negative
            Press, 2025). His short fiction and poetry have been published in{" "}
            <i>Always Crashing</i>,<i>3:AM Magazine</i>,{" "}
            <i>minor literature[s]</i>, <i>Word For/ Word</i>,{" "}
            <i>Dim Shores Presents</i>, and <i>Vastarien</i>{" "}
            <Link href="credits">among other venues</Link>. He runs{" "}
            <a href="https://www.ergot.press/">ergot.</a>, a site for innovative
            and experimental horror.
          </div>
        </div>
      </div>
    </>
  );
}
