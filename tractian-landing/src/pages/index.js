import Head from "next/head";
import { Stamp } from "@/components/Stamp/Stamp";
import Image from "next/image";
import { sensor } from "@/assets";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Landing page for TRACTIAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Criando componentes:</h2>
        <p>
          Por hora esta é uma sessão apenas para testar os componentes enquanto
          os crio.
        </p>
        <Image
          src={sensor}
          alt="Nosso sensor"
          width={480}
          height={964}
          priority
          unoptimized
        />

        <Stamp></Stamp>
      </main>
    </>
  );
}
