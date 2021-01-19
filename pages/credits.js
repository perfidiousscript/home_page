import Head from "next/head";
import styles from "../styles/Credits.module.css";
import Link from "next/link";
import Header from "../components/header.js";

export default function Credits() {
  return (
    <>
      <Header />
      <div className={styles.pageTitle}>Recent and Selected Credits</div>
      <div className={styles.credits}>
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            [Forthcoming] 'Lemma' (Poetry) in Word For/ Word July 2021
          </div>
          <div className={styles.quote}>One poem in 'Word For/ Word'</div>
        </div>
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
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            [Forthcoming] 'The Sculptor' in Vastarien: A Literary Journal Spring
            2021
          </div>
          <div className={styles.quote}>
            A Journalist gets an invitation to interview a reclusive sculptor
            and learns firsthand the meaning of the artist's perplexing work.
          </div>
        </div>
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            [Forthcoming] 'The Catch' in Young Mag January 2021
          </div>
          <div className={styles.quote}>
            "There’s a place nearby that sells these little bottles. Script
            unintelligible. It’s all caffeine with a dash of cholesterol and
            casein. You drink it down in a gulp and the whole world gets wan and
            jiggly. Things seem slick, but manageable. Whole barriers of the
            mind are broken down and you feel like you can talk to anyone,
            anywhere, anytime. I wash three of these a day down my gullet, civet
            scented, I think."
          </div>
        </div>
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            'Gallaher Calls' in{" "}
            <a href="https://dimshores.bigcartel.com/product/dim-shores-presents-volume-1-anthology-2nd-edition">
              Dim Shores Presents #1
            </a>{" "}
            June 2020
          </div>
          <div className={styles.quote}>
            Two reclusive siblings live in the shadow of the shadow of their
            family's wealth, creating art that no one sees. When the family
            lawyer Gallaher calls to deliver some sorry news the lavish the
            hermetic and aesthetic environment they have carefully curated goes
            awry. What is real, what is imagined; what is dreamt and what is
            created all fall together.
          </div>
        </div>
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            'Some Other and Separate Iteration: An Interview with Mark Gluth and
            Steven Purtill' on{" "}
            <a href="https://denniscooperblog.com/please-welcome-to-the-world-mark-gluth-come-down-to-us-mark-gluth-and-steven-purtill-crippled-symmetry-kiddiepunk-press/">
              Dennis Cooper's Blog
            </a>{" "}
            May 2020
          </div>
          <div className={styles.quote}>
            An interview with Author Mark Gluth about his novel 'Come Down to
            Us' as well as an interview with artist Steven Purtill who
            collaborated with Mark on projects related to the novel.
          </div>
        </div>
        <div className={styles.creditEntry}>
          <div className={styles.title}>
            Older credits can be found{" "}
            <a href="https://perfidiousscript.blogspot.com/p/complete-list-of-credits.html">
              here
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}

// <div className={styles.creditEntry}>
//   <div className={styles.title}>
//
//   </div>
//   <div className={styles.quote}>
//
//   </div>
// </div>
