import Image from "next/image";
import styles from "./Card.module.css";

export function Card({ children, category, title, icon }) {
  return (
    <div className={styles.card}>
      {icon && <Image src={icon} alt="" width={64} height={64} />}
      <span className={styles.tag}>{category}</span>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
