import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Reviews.module.css";
import Link from "next/link";
import Header from "../../components/header.js";
import { reviews } from "../../public/reviews.js";

export default function Reviews() {
  function generateLeftBarEntries() {
    let reviewEntries = [];

    for (const entry in reviews) {
      reviewEntries.push(
        <div className={styles.leftBarEntry}>{reviews[entry]["title"]}</div>
      );
    }

    return reviewEntries;
  }

  const [entry, setEntry] = useState("default");

  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.reviewContainer}>
        <div className={styles.leftBar}>{generateLeftBarEntries()}</div>
        <div className={styles.reviewTitle}>{reviews[entry].title}</div>
        <div className={styles.reviewBody}>{reviews[entry].body}</div>
      </div>
    </div>
  );
}
