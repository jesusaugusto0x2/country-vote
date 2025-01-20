"use client";

import { FC } from "react";
import { Button, SelectInput, TextInput } from "@/components";
import { Country } from "@/models";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { VoteFormSchema, ZVoteFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

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

  const onSubmit = async (data: VoteFormSchema) => {
    console.log(data);
  };

  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

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
        <Button type="submit" disabled={!isValid}>
          Submit Vote
        </Button>
      </div>
    </form>
  );
};
