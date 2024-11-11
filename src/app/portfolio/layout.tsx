import styles from "./page.module.css"
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </>
  );
}
