import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Hero } from "@/components/Section/Hero/Hero";
import { Navbar } from "@/components/UI/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>TRACTIAN</title>
        <meta name="description" content="Landing page for TRACTIAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
