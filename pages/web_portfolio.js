import Header from "../components/Header.js";
import Image from "next/image";
import styles from "../styles/WebPortfolio.module.css";
import { portfolio } from "../public/portfolio.js";

export default function WebPortfolio() {
  function generatePortfolio(entries) {
    let generatedPortfolio = entries.map((entry) => (
      <div className={styles.portfolioBody}>
        <div className={styles.portfolioEntry}>
          <div className={styles.entryImage}>
            <a href={entry.link}>
              <img
                src={entry.image}
                width={entry.width}
                height={entry.height}
              />
            </a>
          </div>
          <div className={styles.entryTitle}>{entry.title}</div>
          <div className={styles.entryDescription}>{entry.description}</div>
        </div>
      </div>
    ));
    return generatedPortfolio;
  }

  return (
    <>
      {" "}
      <Header />
      <div class="pageTitle">Web Portfolio</div>
      {generatePortfolio(portfolio)}
    </>
  );
}
