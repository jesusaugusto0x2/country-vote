import { z } from "zod";

export const ZVoteFormSchema = z.object({
  userName: z
    .string({ required_error: "User name is required" })
    .min(3, { message: "Name too short" }),
  userEmail: z.string().email({ message: "Invalid email" }),
  countryId: z.string({ required_error: "A country must be selected" }).uuid(),
});

export type VoteFormSchema = z.infer<typeof ZVoteFormSchema>;
