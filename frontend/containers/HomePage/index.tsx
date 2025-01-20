import { FC } from "react";
import styles from "./styles.module.scss";
import { TableSection } from "./TableSection";

export const HomePage: FC = () => (
  <div className={styles.HomePage}>
    <TableSection query="" />
  </div>
);
