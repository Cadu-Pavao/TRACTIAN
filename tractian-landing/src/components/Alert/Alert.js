import styles from "./Alert.module.css";
import Image from "next/image";
import { expand_less, gear_fail, arrow_right } from "@/assets/icons";

export function Alert({ title, icon, description, aditional, className }) {
  return (
    <div className={`${styles.alertWrapper} ${className}`}>
      <div className={styles.alertText}>
        <Image src={icon} alt="" width={29} height={32} />

        <div className={styles.mainContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Image src={arrow_right} alt="" width={29} height={32} />
      </div>

      <div className={styles.aditionalInfosWrapper}>
        <Image src={aditional.icon} alt="" width={16} height={16} />
        <p>{aditional.description}</p>
      </div>
    </div>
  );
}

Alert.defaultProps = {
  title: "Default Title",
  description: "Default description here",
  aditional: {
    icon: expand_less,
    description: "GMF : 3,4g",
  },
  icon: gear_fail,
};
