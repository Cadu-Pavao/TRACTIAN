import styles from "./Hero.module.css";
import { Button } from "../../UI/Button/Button";
import { HeroImage } from "./HeroImage";
import { google_rate, capterra } from "@/assets";
import Image from "next/image";

export function Hero() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.content}>
          <div className={styles.rewards}>
            <Image src={capterra} alt="" />
            <Image src={google_rate} alt="" />
          </div>
          <h1>Monitoramento online e Gestão de Ativos em um só lugar.</h1>
          <p>
            O futuro é agora! Evite falhas em sua máquinas e deixe o tempo de
            inatividade no passado com o melhor sistema preditivo do mercado.
          </p>

          <Button green>Demonstração</Button>
        </div>
        <HeroImage />
      </div>
    </>
  );
}
