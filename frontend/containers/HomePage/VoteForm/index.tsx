"use client";

import { FC } from "react";
import { Button, SelectInput, TextInput } from "@/components";
import { Country } from "@/models";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { VoteFormSchema, ZVoteFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVoteSubmit } from "./useVoteSubmit";

type Props = {
  countries: Country[];
};

export const VoteForm: FC<Props> = ({ countries }) => {
  const {
    formState: { isValid },
    handleSubmit,
    register,
  } = useForm<VoteFormSchema>({
    mode: "onSubmit",
    defaultValues: {
      userName: "",
      userEmail: "",
      countryId: "",
    },
    resolver: zodResolver(ZVoteFormSchema),
  });

  const { isLoading, voted, error, onVoteSubmit } = useVoteSubmit();

  const onSubmit = async (data: VoteFormSchema) => onVoteSubmit(data);

  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  if (voted) {
    return <h1>Voted!</h1>;
  }

  if (error) {
    return <h1>Failed to vote</h1>;
  }

  return (
    <form className={styles.VoteForm} onSubmit={handleSubmit(onSubmit)}>
      <h4>Vote your favourite country</h4>
      <div className={styles.inputs}>
        <TextInput {...register("userName")} type="text" placeholder="Name" />
        <TextInput
          {...register("userEmail")}
          type="email"
          placeholder="Email"
        />
        <SelectInput {...register("countryId")} options={countryOptions} />
        <Button type="submit" disabled={!isValid || isLoading}>
          Submit Vote
        </Button>
      </div>
    </form>
  );
};
