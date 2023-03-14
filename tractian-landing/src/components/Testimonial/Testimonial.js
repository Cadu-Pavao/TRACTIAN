import Image from "next/image";
import styles from "./Testimonial.module.css";
import { suspensys, bhs, barbieri } from "@/assets";
import { chevron_left, chevron_right } from "@/assets/icons";
import { useState } from "react";
import { Button } from "../UI/Button/Button";

export function Testimonial() {
  const [currentCase, setCurrentCase] = useState(0);
  const cases = [
    {
      image: suspensys,
      name: "Suspensys",
      content: `Como a Suspensys aumentou a vida útil dos ativos substituindo as preditivas mensais com a TRACTIAN. 📈
      Parte do Grupo Randon, a Suspensys coletava dados mensalmente seguindo o método offline, sem se basear na condição, o que prejudicava a confiabilidade dos equipamentos.
      Hoje, a equipe está em contato constante com a saúde das máquinas, tem acesso às informações automaticamente e em tempo real, e consegue antecipar falhas em estágio inicial.
      Foi assim, de forma preditiva, que a equipe evitou um desbalanceamento em um ativo crítico da planta e, consequentemente, uma parada de mais de um mês na produção.
      Assista ao depoimento de Fernando Frosi, Felippe Magnus e Maicon Neukamp, e saiba como o time aumentou a confiabilidade e reduziu custos de manutenção.`,
      link: "https://www.youtube.com/watch?v=P5iOUpfCkLc",
    },
    {
      image: bhs,
      name: "BHS Corrugated",
      content: `Descubra como a BHS Corrugated transformou a rotina do chão de fábrica com o monitoramento online e um software de gestão da manutenção.
      Líder mundial na fabricação do papelão, a BHS realizava e gerenciava todas as atividades de manutenção manualmente, com papel e caneta. 📝
      Supervisor de Manutenção da planta de Curitiba, Stephan Cavalcanti nos contou como conseguiu automatizar ordens de serviço, ter controle total do estoque e estar em contato constante com a condição das máquinas.
      Com a TRACTIAN, a equipe de manutenção tem total visibilidade da planta, acompanha a saúde de cada equipamento e aumenta a confiabilidade dos ativos. ✅`,
      link: "https://www.youtube.com/watch?v=qCc1egV5T-I",
    },
    {
      image: barbieri,
      name: "Barbieri",
      content: `Com monitoramento online aliado a uma gestão da manutenção eficiente, a Barbieri do Brasil deixou as Ordens de Serviço em papel no passado e tem informações mais confiáveis sobre todas as máquinas. 📈✅
      A empresa líder do mercado latinoamericano em fabricação de perfis de aço galvanizado tem máquinas de altíssima produtividade. Uma interrupção não programada na produção traria sérios prejuízos para toda a operação.
      Segundo o gerente industrial Nicolás Paoloni, tudo mudou após a implementação das soluções da TRACTIAN. Agora a comunicação entre a equipe é muito mais clara e todas as informações sobre as máquinas estão concentradas em um só lugar. 👷‍♂️👨‍💻
      A manutenção da Barbieri disse adeus às planilhas, automatizou manutenções preventivas e tem muito mais controle sobre os processos com análises completas e informações confiáveis.`,
      link: "https://www.youtube.com/watch?v=68r5TS5T6mI",
    },
  ];

  function goToNext() {
    setCurrentCase(
      currentCase + 1 === cases.length ? currentCase : currentCase + 1
    );
  }

  function goToPrevius() {
    setCurrentCase(currentCase === 0 ? currentCase : currentCase - 1);
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        <div className={styles.image}>
          <Image
            src={cases[currentCase].image}
            alt=""
            width="auto"
            height="100%"
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <span>#CaseDeSucesso</span>
            <h2>{cases[currentCase].name}</h2>
            <p>{cases[currentCase].content}</p>
            <Button link={cases[currentCase].link} sm>
              Saiba mais
            </Button>
          </div>
          <div className={styles.controller}>
            <Image src={chevron_left} alt="" onClick={goToPrevius} />
            <Image src={chevron_right} alt="" onClick={goToNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
