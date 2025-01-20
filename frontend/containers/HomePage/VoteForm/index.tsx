"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import { Button, TextInput } from "@/components";

export const VoteForm: FC = () => {
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
