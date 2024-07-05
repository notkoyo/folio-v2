import FeatherIcon from "feather-icons-react";
import styles from "./style.module.scss";

const footerItems = [
  {
    name: "GitHub",
    icon: <FeatherIcon icon="github" size={20} />,
    href: "https://github.com/notkoyo",
  },
  {
    name: "LinkedIn",
    icon: <FeatherIcon icon="linkedin" size={20} />,
    href: "https://linkedin.com/in/kaiden-riley",
  },
  {
    name: "Mail",
    icon: <FeatherIcon icon="mail" size={20} />,
    href: "mailto:kaiden@outlook.kr",
  },
];

export default function Footer() {
  return (
    <>
      <ul className={styles.list}>
        {footerItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className={styles.listItem}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
