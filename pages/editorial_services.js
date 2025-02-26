import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Editorial.module.css";
import Link from "next/link";
import Header from "../components/Header.js";

export default function EditorialServices() {
  return (
    <div className={styles.content}>
      <Header />
      <div class="bodyText">
        I offer editorial services including developmental edits and prose
        feedback for works of short fiction. <br /> <br />
        My areas of focus are innovative literary fiction and literary horror. I
        am open to considering other kinds of work on a case-by-case basis.
        <br /> <br />
        Rates are approxiamtely $0.01/word (~US$30 for a 3000 word story)
        negotiable on length of the work and the degree and kind of editing
        desired. <br /> <br />
        In addition to my editorial work at 11:11 Press and ergot. I work with a
        number of authors who have published widely in paying venues and been
        nominated for and won awards. Testimonials and references are available
        upon request.
        <br /> <br />
        I also work as a web developer and can make custom web sites, small
        applications and web based literary projects with price depending on
        scope.
        <br /> <br />
        For more information contact thisis.fryou@gmail.com
      </div>
    </div>
  );
}
