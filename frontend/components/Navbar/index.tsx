import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Navbar: FC = () => (
  <nav className={styles.Navbar}>
    <Image
      src="/assets/images/navbar-placeholder.svg"
      alt="navbar-placeholder"
      width={416}
      height={42}
    />
  </nav>
);
