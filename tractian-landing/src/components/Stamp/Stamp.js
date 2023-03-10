import Image from "next/image";
import { stamp, star } from "@/assets";
import styles from "./Stamp.module.css";

export function Stamp() {
  return (
    <>
      <div className={styles.stamp}>
        <Image
          src={stamp}
          alt="Selo de empresa número 1 em manutenção preventiva."
          width={174}
          height={174}
          className={styles.letter}
        />
        <Image
          src={star}
          alt="Selo de empresa número 1 em manutenção preventiva."
          width={74}
          height={74}
          className={styles.star}
        />
      </div>
    </>
  );
}
