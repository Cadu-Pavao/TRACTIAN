import styles from "./Hero.module.css";
import { Button } from "../../UI/Button/Button";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.text}>
          <p>Startup que mais cresce na América-Latina</p>
          <h1>
            Monitoramento online e Gestão de Ativos em{" "}
            <span className={styles.textHighlight}>um só lugar.</span>
          </h1>
          <p>
            O futuro é agora! Evite falhas em sua máquinas e deixe o tempo de
            inatividade no passado com o melhor sistema preditivo do mercado.
          </p>

          <Button>Demonstração</Button>
        </div>
        <HeroImage />
      </div>
    </>
  );
}
