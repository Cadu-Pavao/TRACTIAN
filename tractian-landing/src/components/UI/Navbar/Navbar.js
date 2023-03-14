import Image from "next/image";
import { logo_white } from "@/assets";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={logo_white} alt="Tractian logo" height={25} />
      </div>
    </>
  );
}
