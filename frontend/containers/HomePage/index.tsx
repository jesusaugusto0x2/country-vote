import { FC } from "react";
import styles from "./styles.module.scss";
import { TableSection } from "./TableSection";
import { SearchSection } from "./SearchSection";
import { VoteForm } from "./VoteForm";
import { Country } from "@/models";

const fetchData = async (): Promise<Country[]> => {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`, {
      cache: "force-cache",
    });

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }
    return resp.json();
  } catch (e) {
    console.error("Error fetching countries data", e);
    return [];
  }
};

type Props = {
  search: string;
};

export const HomePage: FC<Props> = async ({ search }) => {
  const countries = await fetchData();
  console.log({ countries });
  return (
    <div className={styles.HomePage}>
      <VoteForm countries={countries} />
      <h1>Top 10 Most Voted Countries</h1>
      <SearchSection defaultSearch={search} />
      <TableSection query={search} />
    </div>
  );
};
