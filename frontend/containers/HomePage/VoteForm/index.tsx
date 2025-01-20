"use client";

import { FC } from "react";
import { Button, TextInput } from "@/components";
import { Country } from "@/models";
import styles from "./styles.module.scss";

type Props = {
  countries: Country[];
};

export const VoteForm: FC<Props> = ({ countries }) => {
  console.log(countries);

  return (
    <form className={styles.VoteForm}>
      <h4>Vote your favourite country</h4>
      <div className={styles.inputs}>
        <TextInput type="text" placeholder="Name" />
        <TextInput type="email" placeholder="Email" />
        <TextInput type="text" placeholder="Country" />
        <Button type="submit" disabled>
          Submit Vote
        </Button>
      </div>
    </form>
  );
};
