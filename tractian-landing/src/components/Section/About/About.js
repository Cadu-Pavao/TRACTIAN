import styles from "./About.module.css";
import Image from "next/image";
import { tractian_1, tractian_2, tractian_3, tractian_4 } from "@/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

export function About() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionsRef = useRef([]);
  const root = useRef();

  const sections = [
    {
      number: "01",
      title: "Como vamos te ajudar ?",
      description:
        "A TRACTIAN é uma ferramenta que evita que sua operação tenha problemas. Garantimos que ela estará rodando",
      emphasis: "sem interrupções.",
      image: tractian_1,
    },
    {
      number: "02",
      title: "Mas como funciona?",
      description:
        "Através dos nossos sensores, somos capazes de identificar problemas no seu maquinário antes que ele aconteça, trabalhando como uma manutenção preventiva,",
      emphasis: "só que 24h por dia.",
      image: tractian_2,
    },
    {
      number: "03",
      title: "Como saberei se algo precisa de manutenção?",
      description:
        "Toda falha apresenta sintomas previamente. Com o Smart Trac capturamos todo indicio de problema e ao menor sinal de defeito serão enviados a você",
      emphasis: "alertas automatizados.",
      image: tractian_3,
    },
    {
      number: "04",
      title: "Existem mais benefícios?",
      description:
        "Sim, não para por ai! Saiba o que deve ser feito no dia antes mesmo de sair de casa. Controle e organize todas as suas Ordens de Serviço na interface móvel do TracOS™.",
      emphasis: "",
      image: tractian_4,
    },
  ];

  function setRef(element) {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      sectionsRef.current.map((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            scrub: true,
            pin: true,
            start: "top top",
            end: index + 1 === sectionsRef.current.length ? "+=0" : "+=100%",
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={styles.aboutSection}>
      <div className={styles.scrollable}>
        {sections.map(({ number, title, description, emphasis, image }) => {
          return (
            <div ref={setRef} key={number} className={styles.sectionWrapper}>
              <div className={styles.content}>
                <span className={styles.number}>{number}</span>
                <h2>{title}</h2>
                <p>
                  {description}
                  <b> {emphasis}</b>
                </p>
              </div>

              <div className={styles.sectionImage}>
                <Image src={image} alt="" unoptimized />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
