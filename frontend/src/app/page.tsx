"use client"

import Image from "next/image";
import styles from "./page.module.css";

import Sample from "../components/sample";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Sample />
        </div>
      </main>
    </div>
  );
}
