import { FC } from "react";
import styles from "./styles.module.scss";
import { type Column, Table } from "@/components";
import { Country } from "@/models";

const data: Country[] = [
  {
    id: "dfa278f6-28e6-49bd-9315-609ef97b6e4c",
    name: "Angola",
    capitalCity: "Luanda",
    region: "Africa",
    subRegion: "Middle Africa",
    votes: 10,
  },
  {
    id: "2272ff98-bf2b-490b-98fa-52e4ac012845",
    name: "South Georgia",
    capitalCity: "King Edward Point",
    region: "Antarctic",
    subRegion: "",
    votes: 10,
  },
  {
    id: "b01dc555-b193-4b63-abf0-ed5fc455fdfc",
    name: "Grenada",
    capitalCity: "St. George's",
    region: "Americas",
    subRegion: "Caribbean",
    votes: 10,
  },
  {
    id: "d3ead251-4b6f-41c7-b58f-d6d12443a357",
    name: "Switzerland",
    capitalCity: "Bern",
    region: "Europe",
    subRegion: "Western Europe",
    votes: 10,
  },
  {
    id: "c3a5d1c7-1dc8-4e60-9e8d-5a75847c6735",
    name: "Sierra Leone",
    capitalCity: "Freetown",
    region: "Africa",
    subRegion: "Western Africa",
    votes: 10,
  },
  {
    id: "f0ce7caf-0445-45ec-9276-b3abd90a1e83",
    name: "Hungary",
    capitalCity: "Budapest",
    region: "Europe",
    subRegion: "Central Europe",
    votes: 10,
  },
];

const columns: Column<Country>[] = [
  { title: "Name", key: "name" },
  { title: "Capital City", key: "capitalCity" },
  { title: "Region", key: "region" },
  { title: "Sub Region", key: "subRegion" },
  { title: "Votes", key: "votes" },
];

export const HomePage: FC = () => (
  <div className={styles.HomePage}>
    <Table columns={columns} data={data} indexKey="id" />
  </div>
);
