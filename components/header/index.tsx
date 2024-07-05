"use client";

import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
