import styles from "./Hero.module.css";
import { Button } from "../../UI/Button/Button";
import { HeroImage } from "./HeroImage";
import { google_rate, capterra } from "@/assets";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export function Hero() {
  const heroContent = useRef();
  const root = useRef();

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.from(heroContent.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.772,0 0.34,1 1,1 "),
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <>
      <div ref={root} className={styles.heroWrapper}>
        <div ref={heroContent} className={styles.content}>
          <div className={styles.rewards}>
            <Image src={capterra} alt="" />
            <Image src={google_rate} alt="" />
          </div>
          <h1>Monitoramento online e Gestão de Ativos em um só lugar.</h1>
          <p>
            O futuro é agora! Evite falhas em sua máquinas e deixe o tempo de
            inatividade no passado com o melhor sistema preditivo do mercado.
          </p>

          <Button link={"https://tractian.com"} green>
            Demonstração
          </Button>
        </div>
        <HeroImage />
      </div>
    </>
  );
}
