import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Book.module.css";
import Link from "next/link";
import Header from "../components/Header.js";
import { Helmet } from "react-helmet";
import { tviCredits } from "../public/credits.js";

export default function TVI() {
  function creditEntries() {
    let creditsHTML = tviCredits.map((credit) => {
      return (
        <div className="creditEntry" key={credit.title}>
          <div className="creditTitle">{credit.title}</div>
        </div>
      );
    });

    return creditsHTML;
  }
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"Person","name":"Samuel M. Moss","maintainer":"ergot. press"}`}
        </script>
      </Helmet>
      <div className={styles.content}>
        <Header />
        <div className={styles.bookPage}>
          <div className={styles.title}> The Veldt Institute</div>
          <div className={styles.synopsis}>
            <div className={styles.tviCover}>
              <Image src="/images/tvi_cover.avif" fill={true} />
            </div>
            Endless fields of grass. A sky so bright there are barely shadows.
            At the center of this expanse is The Veldt Institute, an austere
            structure governed by austere routine. The patients perform their
            tasks, bathe in the veldtlicht, contemplate silence, all following
            the prescriptions of the institute’s doctors, seven in all, each
            with his or her specialization. Doctor Mellinger practices Movement
            Activities. Doctor Yin heals by absence. Doctor Peltus says we all
            suffer from a malady as unique as the treatment it requires, but our
            narrator’s malady remains elusive, even after so much time at the
            Institute, time that has long blurred into a present as expansive
            and unchanging as the veldt.
            <br />
            To make sense of this, our narrator documents life at the Institute.
            Consider its architecture, the vast library, and the veldt itself, a
            source of unease as much as a source of healing. Why does its light
            have such a profound effect on patients? How foolish is the Holy
            Fool? What, if anything, lies at the end of the Inner Path? The only
            way to know for sure is to walk it.
          </div>
          <a
            className={styles.purchase}
            href="https://asterismbooks.com/product/the-veldt-institute-samuel-m-moss"
          >
            <div className={styles.purchaseText}>Purchase on Asterism</div>
          </a>
          <div className={styles.promo}>
            <div className={styles.subTitle}> Reviews, Interviews et c.</div>
            {creditEntries()}
          </div>
        </div>
      </div>
    </>
  );
}
