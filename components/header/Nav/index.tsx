import styles from "./style.module.scss";
import Link from "./Link/index";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Curve from "./Curve";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}>
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, i) => {
            return (
              <Link
                key={i}
                data={{ ...data, i }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
