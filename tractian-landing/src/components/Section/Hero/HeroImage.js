import Image from "next/image";
import { sensorDiagonal } from "@/assets";
import { drop, trending_up } from "@/assets/icons";
import { Stamp } from "@/components/Stamp/Stamp";
import { Alert } from "@/components/Alert/Alert";
import styles from "./HeroImage.module.css";

export function HeroImage() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.cylinder} />
      <span className={styles.cylinderOutlined} />
      <Alert
        className={styles.alert}
        title="Falhas em Engrenagens"
        description="Desgastes de dentes e excentricidade do eixo."
      />
      <Alert
        className={styles.alertRight}
        title="Cavitação"
        description="Alto risco de deterioração das pás."
        icon={drop}
        aditional={{ icon: trending_up, description: "Aumento de ruído" }}
      />
      <Image
        src={sensorDiagonal}
        alt=""
        width={452}
        height={584}
        unoptimized
        priority
        className={styles.sensorImage}
      />
      <Stamp className={styles.alert} />
    </div>
  );
}
