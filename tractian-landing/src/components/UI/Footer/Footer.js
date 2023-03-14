import Image from "next/image";
import styles from "./Footer.module.css";
import { celphone, google, apple, logo_white } from "@/assets";
import { facebook, linkedin, instagram, youtube, tiktok } from "@/assets/icons";
import { Contact } from "@/components/Contact/Contact";

export function Footer() {
  return (
    <>
      <div className={styles.publiWrapper}>
        <div className={styles.content}>
          <h2>
            O FUTURO É AGORA,
            <br />
            USE TRACTIAN
          </h2>
          <div className={styles.selosWrapper}>
            <a href="https://www.apple.com/br/app-store/" target={"_blank"}>
              <Image
                src={apple}
                alt="Selo de disponibilidade apple"
                width={132}
                height={48}
              />
            </a>
            <a
              href="https://play.google.com/store/games?hl=pt_BR&gl=US"
              target={"_blank"}
            >
              <Image
                src={google}
                alt="Selo de disponibilidade google"
                width={132}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.celphone}
            src={celphone}
            alt="celular com app da Tractian"
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <Image src={logo_white} alt="" />
        <Contact />
        <ul>
          <li>
            <a
              href="https://www.facebook.com/tractian"
              target={"_blank"}
              aria-label="Link para rede social Facebook"
            >
              <Image src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/tractian/"
              target={"_blank"}
              aria-label="Link para rede social Linkedin"
            >
              <Image src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tractian/"
              target={"_blank"}
              aria-label="Link para rede social Instagram"
            >
              <Image src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/TRACTIAN"
              target={"_blank"}
              aria-label="Link para rede social youtube"
            >
              <Image src={youtube} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@tractian"
              target={"_blank"}
              aria-label="Link para rede social tiktok"
            >
              <Image src={tiktok} alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
