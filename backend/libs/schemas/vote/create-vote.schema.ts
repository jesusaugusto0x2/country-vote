import { z } from 'zod';

export const ZCreateVote = z.object({
  userName: z.string().min(3, { message: 'Name is too short' }),
  userEmail: z.string().email({ message: 'Invalid email' }),
  countryId: z.string({ message: 'Country is required' }).uuid(),
});

export type CreateVote = z.infer<typeof ZCreateVote>;
