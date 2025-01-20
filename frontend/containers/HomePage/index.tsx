import { FC } from "react";
import styles from "./styles.module.scss";
import { TableSection } from "./TableSection";
import { SearchSection } from "./SearchSection";

type Props = {
  search: string;
};

export const HomePage: FC<Props> = ({ search }) => {
  return (
    <div className={styles.HomePage}>
      <h1>Top 10 Most Voted Countries</h1>
      <SearchSection defaultSearch={search} />
      <TableSection query={search} />
    </div>
  );
};
