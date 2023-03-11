import Image from "next/image";
import { logo } from "@/assets";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={logo} alt="Tractian logo" height={25} />
      </div>
    </>
  );
}
