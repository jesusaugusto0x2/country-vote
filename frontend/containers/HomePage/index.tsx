import { FC } from "react";
import styles from "./styles.module.scss";
import { TableSection } from "./TableSection";
import { SearchSection } from "./SearchSection";

export const HomePage: FC = () => (
  <div className={styles.HomePage}>
    <h1>Top 10 Most Voted Countries</h1>
    <SearchSection />
    <TableSection query="" />
  </div>
);
