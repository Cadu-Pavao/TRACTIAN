import Marquee from "react-fast-marquee";
import styles from "./MarqueeSection.module.css";
import Image from "next/image";
import { bosch, danone, embraer, hyundai, peg } from "@/assets/branding";

export function MarqueeSection() {
  return (
    <div className={styles.wrapper}>
      <Marquee gradientColor={[34, 34, 34]} speed={80} pauseOnHover>
        <Image src={bosch} alt="" />
        <Image src={danone} alt="" />
        <Image src={embraer} alt="" />
        <Image src={hyundai} alt="" />
        <Image src={peg} alt="" />
      </Marquee>
    </div>
  );
}
