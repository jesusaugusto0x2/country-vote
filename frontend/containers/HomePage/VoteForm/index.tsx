"use client";

import { FC } from "react";
import { Button, SelectInput, TextInput } from "@/components";
import { Country } from "@/models";
import styles from "./styles.module.scss";

type Props = {
  countries: Country[];
};

export const VoteForm: FC<Props> = ({ countries }) => {
  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  return (
    <form className={styles.VoteForm}>
      <h4>Vote your favourite country</h4>
      <div className={styles.inputs}>
        <TextInput type="text" placeholder="Name" />
        <TextInput type="email" placeholder="Email" />
        <SelectInput options={countryOptions} />
        <Button type="submit" disabled>
          Submit Vote
        </Button>
      </div>
    </form>
  );
};
