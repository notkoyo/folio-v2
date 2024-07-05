import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import { Dispatch, SetStateAction } from "react";

interface DataPropTypes {
  title: string;
  href: string;
  i: number;
}

export default function index({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: DataPropTypes;
  isActive: boolean;
  setSelectedIndicator: Dispatch<SetStateAction<string>>;
}) {
  const { title, href, i } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={i}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit">
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}></motion.div>
      <Link href={href} className={styles.linkText}>{title}</Link>
    </motion.div>
  );
}
