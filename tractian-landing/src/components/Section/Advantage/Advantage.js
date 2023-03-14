import { Card } from "@/components/UI/Card/card";
import styles from "./Advantage.module.css";
import { speed, trust, easy } from "@/assets/icons";

export function Advantage() {
  return (
    <>
      <div className={styles.wrapper}>
        <h2>Nunca parados!</h2>
        <span>Com a Tractian ninguém fica parado, nem nós, nem vocês.</span>
        <p>
          Nossos sistema IoT esta em constante expansão. Focamos na melhoria
          continua para o seu processo! Veja alguns benefícios de utilizar
          nossos sensores.
        </p>

        <div className={styles.cards}>
          <Card
            title={"Controle seus ativos de qualquer lugar"}
            category={"Praticidade"}
            icon={easy}
          >
            <p>
              O SmartTrac escuta suas máquinas e te conta tudo o que você
              precisa saber para aumentar a
              <b> disponibilidade e a confiabilidade</b> delas.
            </p>
          </Card>
          <Card
            title={"Rápida Instalação"}
            category={"Velocidade"}
            icon={speed}
          >
            <p>
              Você só precisa plugar o sensor no ativo -{" "}
              <b>o resto ele faz sozinho!</b> Com conexão 3G/4G e bateria de 3
              anos, não é preciso WiFi ou infraestrutura. Toda a coleta é
              criptografada e não há risco de perda de dados.
            </p>
          </Card>
          <Card
            title={"Automatize e acompanhe as atividades de manutenção"}
            category={"Confiabilidade"}
            icon={trust}
          >
            <p>
              Crie, gerencie e atualize suas ordens de serviço falando com sua
              equipe em tempo real pelo aplicativo ou navegador.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
