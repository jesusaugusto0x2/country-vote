"use server";

import { Column, Table } from "@/components";
import { CountryWithVote, TableCountry } from "@/models";
import { FC } from "react";

const fetchData = async (query: string): Promise<TableCountry[]> => {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/countries/with-votes?search=${query}`
    );

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const countries: CountryWithVote[] = await resp.json();

    return countries.map((c) => ({
      id: c.id,
      name: c.name,
      capitalCity: c.capitalCity ?? "-",
      region: c.region ?? "-",
      subRegion: c.subRegion ?? "-",
      votes: c._count.votes,
    }));
  } catch (e) {
    console.error("Error fetching data", e);
    return [];
  }
};

const columns: Column<TableCountry>[] = [
  { title: "Name", key: "name" },
  { title: "Capital City", key: "capitalCity" },
  { title: "Region", key: "region" },
  { title: "Sub Region", key: "subRegion" },
  { title: "Votes", key: "votes" },
];

type Props = {
  query: string;
};

export const TableSection: FC<Props> = async ({ query }) => {
  const data = await fetchData(query);

  return <Table indexKey="id" columns={columns} data={data} />;
};
