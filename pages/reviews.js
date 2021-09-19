import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Reviews.module.css";
import Link from "next/link";
import Header from "../components/Header.js";
import { reviews } from "../public/reviews.js";

export default function Reviews() {
  const router = useRouter();

  const [entry, setEntry] = useState("default");

  function selectReview(e) {
    setEntry(e.target.dataset.key);
  }

  function generateReviewAuthor() {
    if (entry != "default") {
      return (
        <div className={styles.reviewAuthor}>by {reviews[entry]["author"]}</div>
      );
    }
  }

  function generateLeftBarEntries() {
    let reviewEntries = [];

    for (const entry in reviews) {
      if (entry !== "default") {
        reviewEntries.push(
          <div
            className={styles.leftBarEntry}
            key={entry}
            data-key={entry}
            onClick={selectReview}
          >
            {reviews[entry]["title"]} by {reviews[entry]["author"]}
          </div>
        );
      }
    }

    return reviewEntries;
  }

  function generateReviewBody(reviewArray) {
    let reviewBody = [];
    for (const para of reviewArray) {
      reviewBody.push(<div className={styles.reviewPara}>{para}</div>);
    }
    return reviewBody;
  }

  function generatePurchaseLink() {
    let purchaseLink = [];
    if (reviews[entry]["purchase_link"]) {
      purchaseLink.push(
        <a href={reviews[entry]["purchase_link"]}>Purchase Here</a>
      );
    }
    return purchaseLink;
  }

  useEffect(() => {
    if (router.query["review"] != null) {
      setEntry(router.query["review"]);
    }
  }, [router.query]);

  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.reviewPageContainer}>
        <div className={styles.leftBar}>{generateLeftBarEntries()}</div>
        <div className={styles.reviewContainer}>
          <div className={styles.reviewTitle}>{reviews[entry].title}</div>
          {generateReviewAuthor()}
          <div className={styles.purchaseLink}>{generatePurchaseLink()}</div>
          <div className={styles.reviewBody}>
            {generateReviewBody(reviews[entry].body)}
          </div>
        </div>
      </div>
    </div>
  );
}
