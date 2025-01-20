"use client";

import { FC } from "react";
import { Button, SelectInput, TextInput } from "@/components";
import { Country } from "@/models";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { VoteFormSchema, ZVoteFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVoteSubmit } from "./useVoteSubmit";
import Image from "next/image";

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

  if (error) {
    return (
      <section className={styles.VoteFormContainer}>
        <h4>{error}</h4>
      </section>
    );
  }

  if (voted) {
    return (
      <section className={styles.VoteFormContainer}>
        <h4>
          <Image
            src="/assets/images/success-check-icon.svg"
            alt="success-check"
            width={24}
            height={24}
          />
          Your vote was succesfully submitted
        </h4>
      </section>
    );
  }

  return (
    <section className={styles.VoteFormContainer}>
      <h4>Vote your favourite country</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <TextInput {...register("userName")} type="text" placeholder="Name" />
          <TextInput
            {...register("userEmail")}
            type="email"
            placeholder="Email"
          />
          <SelectInput
            {...register("countryId")}
            options={countryOptions}
            disabledOption={{
              value: "",
              label: "Select country",
            }}
          />
          <Button type="submit" disabled={!isValid || isLoading}>
            Submit Vote
          </Button>
        </div>
      </form>
    </section>
  );
};
